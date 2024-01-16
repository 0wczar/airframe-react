// Default import fix
var anime = require('animejs').default ?
    require('animejs').default : require('animejs');
var utils = require('./utilities');

function DropdownMenuAnimate(config) {
    this.dropdownMenus = [];
    this.dropdownMenuObserver = null;
    this.config = Object.assign({}, {
        animationDuration: 300,
        animationStepOffset: 0.1,
        translationDelta: 10,
        initialScale: 0.8,
        animeEasing: 'easeOutElastic(1.5, 0.8)',
    }, config);
}

function placementToTransformOrigin(placement) {
    var placementParts = (placement || '').split('-');
    if (placementParts.length === 2) {
        var placementA = placementParts[0];
        var placementB = placementParts[1];
        var xOrigin = 'center';
        var yOrigin = 'center';

        // Horizontal
        if (placementA === 'top' || placementA === 'bottom') {
            // Inversion is needed
            yOrigin = placementA === 'top' ? 'bottom' : 'top';
            xOrigin = placementB === 'start' ? 'left' : 'right';
        }

        //Vertical
        if (placementA === 'left' || placementA === 'right') {
            // Inversion is needed
            xOrigin = placementA === 'left' ? 'right' : 'left';
            yOrigin = placementB === 'start' ? 'top' : 'bottom';
        }

        return xOrigin + ' ' + yOrigin;
    }
    return 'center center';
}

function originToTranslate(origin, delta) {
    var originParts = (origin || '').split(' ');
    if (originParts.length === 2) {
        var xOrigin = originParts[0];
        var yOrigin = originParts[1];
        var startXTransform = 0;
        var startYTransform = 0;

        if (xOrigin === 'left') {
            startXTransform = -delta;
        }
        if (xOrigin === 'right') {
            startXTransform = delta;
        }
        if (yOrigin === 'top') {
            startYTransform = -delta;
        }
        if (yOrigin === 'bottom') {
            startYTransform = delta;
        }

        return {
            transformX: [startXTransform, 0],
            transformY: [startYTransform, 0]
        };
    }

    return {
        transformX: [0, 0],
        transformY: [0, 0]
    };
}

DropdownMenuAnimate.prototype.initializeWatcher = function(dropdownMenus) {
    var _this = this;

    this.dropdownMenus = NodeList.prototype.isPrototypeOf(dropdownMenus) ?
        Array.from(dropdownMenus) : [dropdownMenus];

    this.dropdownMenuObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var prevShow = mutation.oldValue.indexOf('show') >= 0;
            var currentShow = mutation.target.classList.contains('show');

            if (!prevShow && currentShow) {
                _this.animateIn(mutation.target, mutation.target.parentElement);
            }
        });
    });

    this.dropdownMenus.forEach(function(dropdownMenu) {
        if (dropdownMenu) {
            _this.dropdownMenuObserver.observe(dropdownMenu, {
                attributes: true,
                attributeFilter: ['class'],
                attributeOldValue: true,
            });
        }
    });
};

DropdownMenuAnimate.prototype.destroyWatcher = function() {
    if (this.dropdownMenuObserver) {
        this.dropdownMenuObserver.disconnect();
    }
};

DropdownMenuAnimate.prototype.animateIn = function(menuElement, parentElement) {
    if (!utils.isElementInCollapsedNavbar(parentElement)) {
        // Deterimine placement by Popper attribute
        var popperPlacement = menuElement.attributes['x-placement'] &&
            menuElement.attributes['x-placement'].nodeValue;
        // Deterimne placement by classes on elements
        var classPlacement =
            (parentElement.classList.contains('dropup') ? 'top' : 'bottom') + '-' +
            (menuElement.classList.contains('dropdown-menu-right') ? 'end' : 'start');
        // Deterimne the final placement - Popper priority
        var placement = popperPlacement || classPlacement;
        // Generate a Transform Origin
        var transformOrigin = placementToTransformOrigin(placement);
        // Generate target translation based on Transform Origin
        var targetTranslations = originToTranslate(
            transformOrigin,
            this.config.translationDelta
        );

        var timeline = anime.timeline({
            targets: menuElement,
            duration: this.config.animationDuration,
            begin: function() {
                menuElement.style.transformOrigin = transformOrigin;
            },
        }).add({
            opacity: [0, 1],
            easing: 'easeOutCubic',
        }).add(
            Object.assign({}, {
                scale: [this.config.initialScale, 1],
                easing: this.config.animeEasing,
            }, targetTranslations),
            this.config.animationDuration * this.config.animationStepOffset
        );
    }
};

DropdownMenuAnimate.prototype._animateOut = function(menuElement) {
};

module.exports = DropdownMenuAnimate;