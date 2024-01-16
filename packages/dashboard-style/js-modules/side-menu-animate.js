// Default import fix
var anime = require('animejs').default ?
    require('animejs').default : require('animejs');

function SideMenuAnimate(config) {
    var activeAnimation;

    var option = Object.assign(
        { },
        {
            easing: 'easeInOutCubic',
            duration: 300,
        },
        config
    );
    
    this._nodesObserver = new MutationObserver(function (mutations) {
        var changedNodes = mutations
            .filter(function (mutation) {
                return (
                    mutation.target.classList.contains('sidebar-menu__entry--nested') ||
                    mutation.target.classList.contains('sidebar-submenu__entry--nested')
                );
            })
            .map(function (mutation) {
                return { 
                    target: mutation.target,
                    wasOpen: mutation.oldValue.indexOf('open') >= 0,
                };
            });

        changedNodes.forEach(function (node) {
            var isOpen = node.target.classList.contains('open');

            if (isOpen !== node.wasOpen) {
                var menu = node.target.querySelector('.sidebar-submenu');

                if (activeAnimation && !activeAnimation.completed) {
                    activeAnimation.reset();
                }

                activeAnimation = anime({
                    targets: menu,
                    height: isOpen ?
                        [0, menu.scrollHeight] :
                        [menu.scrollHeight, 0],
                    duration: option.duration,
                    easing: option.easing
                });
                activeAnimation.finished.then(function() {
                    menu.style.height = '';
                });
            }            
        });
    });
}

/**
 * Assigns the parent sidebar element, and attaches a Mutation Observer
 * which watches the coallapsable nodes inside of the sidebar menu
 * and animates them on chenages
 * 
 * @param {HTMLElement} parentElement SidebarMenu parent
 */
SideMenuAnimate.prototype.assignParentElement = function (parentElement) {
    // Reassign Observer Element
    this._nodesObserver.disconnect();
    this._nodesObserver.observe(parentElement, {
        attributes: true,
        attributeFilter: ['class'],
        attributeOldValue: true,
        subtree: true
    });
};

/**
 * Disconnects the observer
 */
SideMenuAnimate.prototype.destroy = function() {
    this._nodesObserver.disconnect();
};

/**
 * Disconnects the observer
 */
SideMenuAnimate.prototype.destroy = function() {
    this._nodesObserver.disconnect();
}

module.exports = SideMenuAnimate;
