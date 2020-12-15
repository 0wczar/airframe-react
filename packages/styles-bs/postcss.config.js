module.exports = {
    plugins: [
        require('postcss-simple-vars')({
            variables: './src/styles/_colors-export'
        }),
    ]
};
