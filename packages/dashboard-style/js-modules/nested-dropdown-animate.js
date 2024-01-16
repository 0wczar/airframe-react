// Default import fix
var anime = require('animejs').default ?
    require('animejs').default : require('animejs');
var utils = require('./utilities');

function NestedDropdownAnimate(config) {
    this.config = Object.assign({}, {
        animationDuration: 150,
        animationStepOffset: 0.1,
        translationDelta: 10,
        initialScale: 0.8,
        animeEasing: 'easeOutElastic(1.5, 0.8)',
    }, config);
    this.boundExecuteAnimation =
        this._executeAnimation.bind(this);
}

NestedDropdownAnimate.prototype.initialize = function(dropdownParents) {
    var _this = this;

    var nestedDropdowns = NodeList.prototype.isPrototypeOf(dropdownParents) ?
        Array.from(dropdownParents) : [dropdownParents];
    this.dropdownSubmenuLinks = nestedDropdowns
        .map(function(dropdown) {
            return Array.from(
                dropdown.querySelectorAll('.nested-dropdown__submenu-item__link')
            );
        })
        .reduce(function(acc, linkElements) {
            return acc.concat(linkElements);
        }, []);
    
    this.dropdownSubmenuLinks.forEach(function(dropdownSubmenuLink) {
        dropdownSubmenuLink.addEventListener('mouseenter', _this.boundExecuteAnimation);
    });
};

NestedDropdownAnimate.prototype.destroy = function() {
    this.dropdownSubmenuLinks.removeEventListener('mouseenter', this.boundExecuteAnimation);
};

NestedDropdownAnimate.prototype._executeAnimation = function(event) {
    // Animate only in uncollapsed dropdowns
    if (!utils.isElementInCollapsedNavbar(event.currentTarget)) {
        var menuElement = event.currentTarget.nextElementSibling;
        var timeline = anime.timeline({
            targets: menuElement,
            duration: this.config.animationDuration,
            begin: function() {
                menuElement.style.transformOrigin = 'left-top';
            },
        }).add({
            opacity: [0, 1],
            easing: 'easeOutCubic',
        }).add({
            scale: [this.config.initialScale, 1],
            easing: this.config.animeEasing,
            translateX: [-this.config.translationDelta, 0],
            translateY: [-this.config.translationDelta, 0],
        }, this.config.animationDuration * this.config.animationStepOffset);
    }
};

module.exports = NestedDropdownAnimate;