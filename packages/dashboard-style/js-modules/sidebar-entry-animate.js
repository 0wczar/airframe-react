// Default import fix
var anime = require('animejs').default ?
    require('animejs').default : require('animejs');

function SidebarEntryAnimate(options) {
    // Flag to ensure the animation is fired only once
    this.wasAnimated = false;
    this.sidebarElement = null;
    this.config = Object.assign({}, {
        duration: 100,
        easing: 'linear'
    }, options);
}

SidebarEntryAnimate.prototype.executeAnimation = function() {
    var config = this.config;

    var sidebarElement = this.sidebarElement;

    if (!this.wasAnimated && sidebarElement) {
        var isSlim = (
            sidebarElement.classList.contains('sidebar--slim') &&
            sidebarElement.classList.contains('sidebar--collapsed')
        );
        var sidebarMenu = sidebarElement.querySelector(
            '.sidebar-menu'
        );

        var sidebarSectionsPreMenu = [];
        var sidebarMenuSection = null;
        var sideMenuEntries = [];
        var sidebarSectionsPostMenu = [];

        sidebarElement.querySelectorAll('.sidebar__section')
            .forEach(function(sectionElement) {
                // Ommit sections which arent visible
                if (
                    (
                        isSlim &&
                        sectionElement.classList.contains('sidebar__hide-slim')
                    ) || (
                        !isSlim &&
                        sectionElement.classList.contains('sidebar__show-slim')
                    )
                ) {
                    return;
                }

                if (sectionElement.contains(sidebarMenu)) {
                    sidebarMenuSection = sectionElement;
                    // Add sidemenu entries
                    var sidebarMenuEntriesNodes =
                        sectionElement.querySelectorAll(
                            '.sidebar-menu > .sidebar-menu__entry'
                        );
                    sideMenuEntries = sideMenuEntries.concat(
                        Array.from(sidebarMenuEntriesNodes)
                    );
                } else {
                    if (sideMenuEntries.length > 0) {
                        // Add post menu sections
                        sidebarSectionsPostMenu
                            .push(sectionElement);
                    } else {
                        // Add pre menu sections
                        sidebarSectionsPreMenu
                            .push(sectionElement);
                    }
                }
            });

        var timeline = anime.timeline({
            easing: config.easing,
            duration: config.duration,
            complete: function() {
                // Clear section styles
                [].concat(
                    sidebarSectionsPreMenu,
                    sideMenuEntries,
                    sidebarSectionsPostMenu
                ).forEach(function(element) {
                    element.style.opacity = '';
                });
            }
        });
        var staggerDelay =
            config.duration / (
                sidebarSectionsPreMenu.length +
                sidebarSectionsPostMenu. length
            ) / sideMenuEntries.length;
        timeline
            .add({
                targets: sidebarSectionsPreMenu,
                delay: anime.stagger(staggerDelay),
                opacity: [0, 1]
            })
            .add({
                targets: sideMenuEntries,
                delay: anime.stagger(staggerDelay),
                begin: function() {
                    sidebarMenuSection.style.opacity = 1;
                },
                opacity: [0, 1]
            })
            .add({
                targets: sidebarSectionsPostMenu,
                delay: anime.stagger(staggerDelay),
                opacity: [0, 1]
            });

        this.wasAnimated = true;

        return timeline.finished;
    }

    return Promise.resolve();
};

/**
 * Assigns the parent sidebar element, and attaches a Mutation Observer
 * which watches the coallapsable nodes inside of the sidebar menu
 * and animates them on chenages
 * 
 * @param {HTMLElement} parentElement SidebarMenu parent
 */
SidebarEntryAnimate.prototype.assignParentElement = function (parentElement) {
    this.sidebarElement = parentElement;
};

/**
 * Disconnects the observer
 */
SidebarEntryAnimate.prototype.destroy = function() { };

module.exports = SidebarEntryAnimate;