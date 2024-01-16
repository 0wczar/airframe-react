// Default import fix
var anime = require('animejs').default ?
    require('animejs').default : require('animejs');

var ANIMATION_DURATION = 150;
var ANIMATION_STEP_OFFSET = 0.1;

function SlimMenuAnimate(config) {
    var _this = this;

    this.mouseInHandler = function() {
        if (_this._animationsEnabled()) {
            var triggerElement = this;
            var subMenuElement = triggerElement.querySelector(':scope > .sidebar-submenu');
            
            var timeline = anime.timeline({
                targets: subMenuElement,
                duration: ANIMATION_DURATION,
                begin: function() {
                    subMenuElement.style.transformOrigin = 'top left';
                }
            }).add({
                opacity: [0, 1],
                easing: 'easeOutCubic',
            }).add({
                scale: [0.8, 1],
                translateY: [-30, 0],
                translateX: [-30, 0],
                easing: 'easeOutElastic(1.5, 0.8)',
            }, ANIMATION_DURATION * ANIMATION_STEP_OFFSET);

            // Reset Style on Finish
            timeline.finished.then(function() {
                subMenuElement.style.opacity = '';
                subMenuElement.style.transform = '';
                subMenuElement.style.transformOrigin = '';
            });
        }
    };
    this.mouseOutHandler = function() {
        if (_this._animationsEnabled()) {
            var triggerElement = this;
            var subMenuElement = triggerElement.querySelector(':scope > .sidebar-submenu');
            return;
            var timeline = anime.timeline({
                targets: subMenuElement,
                duration: ANIMATION_DURATION,
                begin: function() {
                    subMenuElement.style.display = 'block';
                    subMenuElement.style.height = 'auto';
                    subMenuElement.style.transformOrigin = 'top left';
                }
            }).add({
                scale: [1, 0.8],
                translateY: [0, -30],
                translateX: [0, -30],
                easing: 'easeOutElastic(1.5, 0.8)',
            }).add({
                opacity: [1, 0],
                easing: 'easeOutCubic',
            }, ANIMATION_DURATION * ANIMATION_STEP_OFFSET);

            // Reset Style on Finish
            timeline.finished.then(function() {
                subMenuElement.style.opacity = '';
                subMenuElement.style.transform = '';
                subMenuElement.style.transformOrigin = '';
                subMenuElement.style.display = '';
                subMenuElement.style.height = '';
            });
        }
    };
}

SlimMenuAnimate.prototype._animationsEnabled = function() {
    return this._sidebarElement.classList.contains('sidebar--animations-enabled') &&
            this._sidebarElement.classList.contains('sidebar--slim') &&
            this._sidebarElement.classList.contains('sidebar--collapsed');
};

/**
 * Assigns the parent sidebar element, and attaches hover listeners
 * 
 * @param {HTMLElement} parentElement SidebarMenu parent
 */
SlimMenuAnimate.prototype.assignSidebarElement = function (sidebarElement) {
    var _this = this;
    _this._sidebarElement = sidebarElement;
    _this._triggerElements = Array.from(
        _this._sidebarElement.querySelectorAll(
            '.sidebar-menu .sidebar-menu__entry.sidebar-menu__entry--nested'
        )
    );
    _this._triggerElements.forEach(function (triggerElement) {
        triggerElement.addEventListener('mouseenter', _this.mouseInHandler);
        triggerElement.addEventListener('mouseleave', _this.mouseOutHandler);
    });
};

/**
 * Disconnects the listeners
 */
SlimMenuAnimate.prototype.destroy = function() {
    var _this = this;
    _this._triggerElements.forEach(function (triggerElement) {
        triggerElement.removeEventListener('mouseenter', _this.mouseInHandler);
        triggerElement.removeEventListener('mouseleave', _this.mouseOutHandler);
    });
};

module.exports = SlimMenuAnimate;
