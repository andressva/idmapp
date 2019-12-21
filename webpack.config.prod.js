const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWeppackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const base = require('./webpack.config.base')
const merge = require('webpack-merge')

module.exports = merge(base, {
    mode: 'production',
    output: {
      filename: 'static/js/main.[hash:8].js',
      chunkFilename: 'static/js/[name].chunk.[hash:8].js',
      path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }
        ],
    },
    optimization: {
      minimizer: [
        new TerserWeppackPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
          cache: true,
          sourceMap: true,
        }),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAtributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[hash:8].css',
      }),
      new CleanWebpackPlugin(),
    ],
  })