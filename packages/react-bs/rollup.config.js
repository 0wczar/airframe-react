import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

// Common =======================================
const commonPlugins = () => {
    const extensions = [
        '.js',
        '.jsx',
        '.ts',
        '.tsx'
    ];

    return [
        external(),
        resolve(),
        commonjs({
            include: /node_modules/,
            extensions
        }),
        babel({
            rootMode: 'upward',
            babelHelpers: 'runtime',
            ignore: [/node_modules/],
            extensions
        }),
    ]
}

// Development ==================================
const configDevelopment = {
    input: "src/index.ts",
    external: [/@babel\/runtime/],
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
        }
    ],
    plugins: [
        ...commonPlugins()
    ]
};

// Production ===================================
const configProduction = {
    input: "src/index.ts",
    external: [/@babel\/runtime/],
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true,
        }
    ],
    plugins: [
        ...commonPlugins(),
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
