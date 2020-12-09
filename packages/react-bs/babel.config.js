module.exports = {
    presets: ['@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
        '@babel/plugin-transform-runtime',
        [
            'module-resolver',
            {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                ],
                root: ['.'],
                alias: {
                    '@hooks': './src/hooks',
                    '@components': './src/components'
                },
            },
        ],
    ],
};
