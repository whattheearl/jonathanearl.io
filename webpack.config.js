const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
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
                use: { loader: 'html-loader'}
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {    
                        name: 'assets/[name].[ext]'
                    }  
                  }
                ]
              }
        
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin('dist'),
        new CopyWebpackPlugin([{to: 'assets/icon', from: 'src/assets/icon'}])
    ]
}