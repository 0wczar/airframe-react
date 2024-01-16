var SIZES = [
    { size: 'xs', query: '(max-width: 575.8px)' },
    { size: 'sm', query: '(min-width: 576px) and (max-width: 767.8px)' },
    { size: 'md', query: '(min-width: 768px) and (max-width: 991.8px)' },
    { size: 'lg', query: '(min-width: 992px) and (max-width: 1199.8px)' },
    { size: 'xl', query: '(min-width: 1200px)' },
];

function getCurrentBsScreenSize() {
    var screenSize = 'xl';

    SIZES.forEach(function(sizeDef) {
        if (window.matchMedia(sizeDef.query).matches) {
            screenSize = sizeDef.size;
        }
    });

    return screenSize;
}

function isElementInCollapsedNavbar(element) {
    var navbar = element.closest('.navbar');
    var collapse = element.closest('.navbar-collapse');

    if (navbar && collapse) {
        var currentScreenSize = getCurrentBsScreenSize();
        var navbarClasses = navbar.className.split(' ');

        for (var i = 0; i < navbarClasses.length; i++) {
            var className = navbarClasses[i];
            // Avoid Regexp for better performance
            if (
                className === 'navbar-expand-xs' ||
                className === 'navbar-expand-sm' ||
                className === 'navbar-expand-md' ||
                className === 'navbar-expand-lg' ||
                className === 'navbar-expand-xl'
            ) {
                var collapseSize = className.replace('navbar-expand-', '');
                var collapseSizeIndex = SIZES.findIndex(
                    function (sizeDef) { return sizeDef.size === collapseSize; }
                );
                var currentScreenSizeIndex = SIZES.findIndex(
                    function (sizeDef) { return sizeDef.size === currentScreenSize; }
                );
                return currentScreenSizeIndex < collapseSizeIndex;
            }
        }

        return navbar.classList.contains('navbar-expand-' + currentScreenSize);
    }

    return false;
}

module.exports = {
    getCurrentBsScreenSize: getCurrentBsScreenSize,
    isElementInCollapsedNavbar: isElementInCollapsedNavbar,
};
