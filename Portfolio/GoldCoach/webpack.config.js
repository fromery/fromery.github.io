const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        main: './assets/src/js/main'
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '',
        library: '[name]'
    },

    watch: NODE_ENV == 'development',

    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                use: ExtractTextPlugin.extract({
                        use: [
                            {loader: 'css-loader'},
                            {loader: 'sass-loader'}
                        ]
                    }
                ),

                test: /\.scss$/
            },
            {
                test: /\.(jpe?g|png|woff|woff2|eot|otf|gif|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader?limit=30000&name=[name].[ext]'
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },

    devtool: NODE_ENV == 'production' ? "source-map" : 'eval',

    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;

/*
SET NODE_ENV=production& webpack
*/
