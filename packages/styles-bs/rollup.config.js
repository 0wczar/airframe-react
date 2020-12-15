import scss from 'rollup-plugin-scss';
import postCss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    sourcemap: true,
    output: [
        {
            dir: "js",
            format: "cjs",
            exports: "named",
        },
        {
            dir: "js",
            format: "es",
            exports: "named",
        }
    ],
    plugins: [
        scss(),
        typescript(),
    ]
}