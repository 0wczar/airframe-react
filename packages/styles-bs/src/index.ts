// Style Key Consts =============================
const FONT_FAMILY_KEYS = [
    '--font-family-sans-serif',
    '--font-family-monospace'
];

const BREAKPOINT_KEYS  = [
    '--breakpoint-xs',
    '--breakpoint-sm',
    '--breakpoint-md',
    '--breakpoint-lg',
    '--breakpoint-xl'
];

// Exports ======================================

/**
 * Retrieves colors defined by CSS variables within the rendered HTML tag
 */
export function getColors() {
    return mapObjKeys(
        omit(
            getHtmlElementCSSVariables(),
            [...FONT_FAMILY_KEYS, ...BREAKPOINT_KEYS]
        ),
        objKey => objKey.replace('--', '')
    );
}

/**
 * Gets a color from the defined ones as CSS variables on the HTML tag
 * @param colorName color name (without --)
 */
export function getColor(colorName: string) {
    return getColors()[colorName] ?? 'rgba(255, 255, 255, 0)';
}

/**
 * Returns defined font families from the rendered HTML tag via CSS variables
 */
export function getFonts() {
    return mapObjKeys(
        pick(
            getHtmlElementCSSVariables(),
            FONT_FAMILY_KEYS
        ),
        objKey => objKey.replace('--', '')
    )
}

/**
 * Returns defined breakpoints from the rendered HTML tag via CSS variables
 */
export function getBreakpoints() {
    return mapObjKeys(
        pick(
            getHtmlElementCSSVariables(),
            BREAKPOINT_KEYS
        ),
        objKey => objKey.replace('--', '')
    )
}

// Utilities ====================================
function filterObjKeys<T extends Object, V = any>(obj: T, testFunc: (key: string, val: V) => boolean) {
    const output = {};

    for (const objKey of Object.keys(obj)) {
        if (testFunc(objKey, obj[objKey])) {
            output[objKey] = obj[objKey];
        }
    }

    return output;
}

function mapObjKeys<T extends Object, V = any>(obj: T, mapFunc: (key: string) => string) {
    const output = {};

    for (const objKey of Object.keys(obj)) {
        output[mapFunc(objKey)] = obj[objKey];
    }

    return output;
}

function pick<T extends Object>(obj: T, keys: string[]) {
    return filterObjKeys(obj, (key) => keys.indexOf(key) >= 0);
}

function omit<T extends Object>(obj: T, keys: string[]) {
    return filterObjKeys(obj, (key) => keys.indexOf(key) < 0);
}

function getHtmlElementCSSVariables() {
    if (
        typeof window !== 'undefined' &&
        typeof document !== 'undefined'
    ) {
        const htmlElement = document.querySelector('html');
        const htmlStyle = window.getComputedStyle(htmlElement);

        return filterObjKeys(htmlStyle, (key) => key.indexOf('--') === 0);
    }
    return {};
}
