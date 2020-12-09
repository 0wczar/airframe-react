import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
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
            sourcemap: true,
            dir: "./lib"
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true,
            dir: "./lib"
        }
    ],
    plugins: [
        external(),
        {
            transform ( code, id ) {
              console.log( id );
              console.log( code );
              // not returning anything, so doesn't affect bundle
            }
          },
        babel({
            babelHelpers: 'bundled'
        }),
        resolve(),
        typescript({
            sourceMap: true,
            inlineSources: true,
            exclude: "**/__tests__/**"
        }),
        commonjs({
            include: /node_modules/
        }),
        terser({
            mangle: false
        }),
    ]
};

const extensions = [
    '.js',
    '.jsx',
    '.ts',
    '.tsx'
];

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
            //exclude: /node_modules/,
            extensions
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
