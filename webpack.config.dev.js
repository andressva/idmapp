const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')


module.exports = merge(base, {
    mode: 'development',
    output: {
        filename: 'static/js/main.js',
        chunkFilename: 'static/js/[name].chunk.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    
    plugins: [ new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
})