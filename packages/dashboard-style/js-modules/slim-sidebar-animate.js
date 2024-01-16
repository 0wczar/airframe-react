var anime = require('animejs').default ? require('animejs').default : require('animejs');

function SlimSidebarAnimate(options) {
    var timelineStage1,
        timelineStage2;
    var isAnimating = false;
    var config = Object.assign({}, {
        sidebarWidth: 250,
        sidebarSlimWidth: 60,
        animationDuration: 400,
        animationStaggerDelay: 10,
        animationEasing: 'easeInQuad'        
    }, options);

    function buildTimeline(beginCallback) {
        return anime.timeline({
            easing: config.animationEasing,
            duration: config.animationDuration / 2,
            autoplay: false,
            begin: beginCallback || function() { }
        });
    }

    this._nodesObserver = new MutationObserver(function (mutations) {
        var mutation = mutations[0];
        var animationHalfTime = config.animationDuration / 2;
        var sidebarElement = mutation.target;
        var layoutSidebarWrap = sidebarElement.closest('.layout__sidebar');
        var sidebarMenu = sidebarElement.querySelector('.sidebar-menu');
        var sidebarLabels = document.querySelectorAll(
            '.sidebar-menu__entry__link > span, ' +
            '.sidebar-submenu__entry__link > span'
        );
        var sidebarIcons = document.querySelectorAll('.sidebar-menu__entry__icon');
        var sidebarHideSlim = document.querySelectorAll('.sidebar__hide-slim');
        var sidebarShowSlim = document.querySelectorAll('.sidebar__show-slim');

        var isSidebarSlim = sidebarElement.classList.contains('sidebar--slim');
        var isSidebarCollapsed = sidebarElement.classList.contains('sidebar--collapsed');
        var lastSidebarSlim = mutation.oldValue.indexOf('sidebar--slim') >= 0;
        var lastSidebarCollapsed = mutation.oldValue.indexOf('sidebar--collapsed') >= 0;
        
        // Finish previous animations if they exist
        if (timelineStage1 && timelineStage1.isAnimating) { timelineStage1.complete(); }
        if (timelineStage2 && timelineStage2.isAnimating) { timelineStage2.complete(); }

        if (
            (isSidebarSlim || lastSidebarSlim) &&
            (isSidebarCollapsed !== lastSidebarCollapsed) &&
            !isAnimating
        ) {
            isAnimating = true;

            if (isSidebarCollapsed) {
                // Recover the changed class so the animation
                // can be played smoothly
                sidebarElement.classList.remove('sidebar--collapsed');
                // STAGE 1: Hide Default
                timelineStage1 = buildTimeline()
                    .add({
                        // Move the sidebar off screen and leave only the "slim" part
                        targets: sidebarElement,
                        translateX: -(config.sidebarWidth - config.sidebarSlimWidth),
                        begin: function() {
                            // This class hides ::after carets and fades
                            // the active highlight
                            sidebarElement.classList.add('sidebar--animate-slim--progress');
                        }
                    })
                    .add({
                        // Hide the menu entries titles
                        targets: sidebarLabels,
                        opacity: 0,
                        complete: function() {
                            // Reset the style of titles upon completion
                            sidebarLabels.forEach(function(label) { label.removeAttribute('style'); });
                        },
                    }, 0)
                    .add({
                        // Hide sections which are visible in default sidebar
                        targets: sidebarHideSlim,
                        opacity: 0
                    }, 0);
                // STAGE 2: Show Slim
                timelineStage2 = buildTimeline()
                    .add({
                        // Create a fade-in and entry from left of slim icons
                        targets: sidebarIcons,
                        opacity: [0, 1],
                        translateX: [-config.sidebarSlimWidth, 0],
                        delay: anime.stagger(config.animationStaggerDelay),
                        begin: function() {
                            // First animation stage complete, make the sidebar trully slim
                            sidebarElement.classList.add('sidebar--collapsed');
                            sidebarElement.classList.remove('sidebar--animate-slim--progress');
                            // Reset sidebar style after the first stage
                            sidebarElement.removeAttribute('style');
                            // Reset Hidden elements styles
                            sidebarHideSlim.forEach(function(element) { element.removeAttribute('style'); });
                        },
                        complete: function() {
                            // Reset icons styles
                            sidebarIcons.forEach(function(icon) { icon.removeAttribute('style'); });
                        },
                    })
                    .add({
                        // Fade in section visible only in slim sidebar
                        targets: sidebarShowSlim,
                        opacity: [0, 1],
                        complete: function() {
                            sidebarShowSlim.forEach(function(element) { element.removeAttribute('style'); });
                        }
                    }, 0);
                // START: Chain both timelines
                timelineStage1.finished.then(function() {
                    timelineStage2.play();
                });
                timelineStage2.finished.then(function() {
                    isAnimating = false;
                    // Reset styles of modified sections
                    sidebarElement.querySelectorAll('.sidebar__section')
                        .forEach(function(section) { section.removeAttribute('style'); });
                    sidebarElement.classList.remove();
                });
                timelineStage1.play();
            } else {
                // Recover the slim classes so the animation can make
                // the smooth transition
                sidebarElement.classList.add('sidebar--collapsed');
                sidebarMenu.classList.add('sidebar-menu--slim');
                layoutSidebarWrap.classList.add('layout__sidebar--slim');
                // Setup the animation class
                sidebarElement.classList.add('sidebar--animate-slim--progress');
                // STAGE 1: Hide Slim
                timelineStage1 = buildTimeline()
                    .add({
                        // Hide the slim icons to the left of the screen and fade them out
                        targets: sidebarIcons,
                        translateX: -config.sidebarSlimWidth,
                        duration: animationHalfTime,
                        delay: anime.stagger(config.animationStaggerDelay),
                        opacity: 0,
                    })
                    .add({
                        // Hide the sections visible only in slim
                        targets: sidebarShowSlim,
                        duration: animationHalfTime,
                        opacity: [1, 0],
                    }, 0);

                // STAGE 2: Show Slim
                timelineStage2 = buildTimeline()
                    // HACK: Setup step - translateX 0 is set for initial transform value
                    // animejs sets the translate by the first step in timeline
                    // which works wrong with remmoving the collapse clases. In other
                    // words: Don't touch this!
                    .add({
                        targets: sidebarElement,
                        duration: 1,
                        translateX: [0, 0],
                        complete: function() {
                            // Reset
                            sidebarIcons.forEach(function(icon) { icon.removeAttribute('style'); });
                            sidebarShowSlim.forEach(function(icon) { icon.removeAttribute('style'); });

                            // Hide Labels
                            sidebarLabels.forEach(function(label) { label.style.opacity = 0; });
                            
                            // Make the sidebar default
                            sidebarElement.classList.remove('sidebar--collapsed');
                            sidebarMenu.classList.remove('sidebar-menu--slim');
                            // Remove the animation classes
                            sidebarElement.classList.remove('sidebar--animate-slim--progress');
                        }
                    })
                    .add({
                        // Slide the sidebar back to default position
                        targets: sidebarElement,
                        duration: animationHalfTime,
                        complete: function() {
                            // Reset sidebar styles
                            sidebarElement.removeAttribute('style');
                        },
                        translateX: [-(config.sidebarWidth - config.sidebarSlimWidth), 0],
                    })
                    .add({
                        // Fade in the SideMenu entries titles
                        targets: sidebarLabels,
                        duration: animationHalfTime,
                        opacity: [0, 1],
                        complete: function() {
                            sidebarLabels.forEach(function(label) { label.removeAttribute('style'); });
                        },
                    }, 0)
                    .add({
                        // Fade in sections which are visible only in default sidebar
                        targets: sidebarHideSlim,
                        duration: animationHalfTime,
                        opacity: [0, 1],
                        complete: function() {
                            sidebarHideSlim.forEach(function(label) { label.removeAttribute('style'); });
                        }
                    }, 0);
                // START: Chain both timelines
                timelineStage1.finished.then(function() {
                    requestAnimationFrame(function() {
                        timelineStage2.play();
                    });
                    
                });
                timelineStage2.finished.then(function() {
                    isAnimating = false;
                    // Reset styles of modified sections
                    sidebarElement.querySelectorAll('.sidebar__section')
                        .forEach(function(section) { section.removeAttribute('style'); });

                    // Recover the layout__sidebar state
                    layoutSidebarWrap.classList.remove('layout__sidebar--slim');
                });
                timelineStage1.play();
            }
        }
    });
}

/**
 * Assigns the parent sidebar element, and attaches a Mutation Observer
 * which watches the coallapsable nodes inside of the sidebar menu
 * and animates them on chenages
 * 
 * @param {HTMLElement} parentElement SidebarMenu parent
 */
SlimSidebarAnimate.prototype.assignParentElement = function (parentElement) {
    // Reassign Observer Element
    this._nodesObserver.disconnect();
    this._nodesObserver.observe(parentElement, {
        attributes: true,
        attributeFilter: ['class'],
        attributeOldValue: true,
        subtree: false
    });
};

/**
 * Disconnects the observer
 */
SlimSidebarAnimate.prototype.destroy = function() {
    this._nodesObserver.disconnect();
};

module.exports = SlimSidebarAnimate;