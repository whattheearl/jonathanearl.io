const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const devMode = process.env.NODE_ENV === 'production'
console.log(devMode, process.env.NODE_ENV)

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // "style-loader", // creates style nodes from JS strings
                    devMode ? MiniCssExtractPlugin.loader : "style-loader",
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]            
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'raw-loader',
                }
            }
        
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                html5                          : true,
                collapseWhitespace             : true,
                minifyCSS                      : true,
                minifyJS                       : true,
                minifyURLs                     : false,
                removeAttributeQuotes          : true,
                removeComments                 : true,
                removeEmptyAttributes          : true,
                removeOptionalTags             : true,
                removeRedundantAttributes      : true,
                removeScriptTypeAttributes     : true,
                removeStyleLinkTypeAttributese : true,
                useShortDoctype                : true
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/error.html',
            filename: 'error.html',
            minify: {
                html5                          : true,
                collapseWhitespace             : true,
                minifyCSS                      : true,
                minifyJS                       : true,
                minifyURLs                     : false,
                removeAttributeQuotes          : true,
                removeComments                 : true,
                removeEmptyAttributes          : true,
                removeOptionalTags             : true,
                removeRedundantAttributes      : true,
                removeScriptTypeAttributes     : true,
                removeStyleLinkTypeAttributese : true,
                useShortDoctype                : true
            }
        }),
        new CleanWebpackPlugin('dist'),
        new CopyWebpackPlugin([
            {from: 'src/assets', to:  'assets'}
        ]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css'
          })
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin()
        ]
    }
}