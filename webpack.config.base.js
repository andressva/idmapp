const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    plugins: [ new Dotenv() ]
}