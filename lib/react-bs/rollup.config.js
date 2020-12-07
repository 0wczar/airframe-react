import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

// Development ==================================
const configDevelopment = {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        resolve(),
        typescript({
            sourceMap: true,
            inlineSources: true,
            rollupCommonJSResolveHack: true,
            exclude: "**/__tests__/**"
        }),
        commonjs({
            include: ["../../node_modules/**"],
            namedExports: {
                "../../node_modules/react/react.js": [
                    "Children",
                    "Component",
                    "createElement"
                ],
                "../../node_modules/react-dom/index.js": [
                    "render"
                ]
            }
        }),
        terser({
            mangle: false
        })
    ]
};

// Production ===================================
const configProduction = {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: false
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: false
        }
    ],
    plugins: [
        external(),
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            exclude: "**/__tests__/**",
            clean: true
        }),
        commonjs({
            include: ["../../node_modules/**"],
            namedExports: {
                "../../node_modules/react/react.js": [
                    "Children",
                    "Component",
                    "createElement"
                ],
                "../../node_modules/react-dom/index.js": [
                    "render"
                ]
            }
        }),
        terser()
    ]
};

// Entry ========================================
export default () => {
    if (process.env['BUILD'] === 'development') {
        return configDevelopment;
    }

    return configProduction;
}
