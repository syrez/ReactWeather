webpack = require('webpack');
path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        './app/app.jsx'
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            },
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, "app"),
                path.resolve(__dirname, "app/api"),
                path.resolve(__dirname, "app/exemples")
            ],
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.scss$/,
            include: [
                path.resolve(__dirname, "app/styles"),
            ],
            loaders: ["style-loader", "css-loader", "sass-loader"],
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader',
            include: [
                path.resolve(__dirname, "public"),
            ],
            exclude: /(node_modules|bower_components)/
        }]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false,
            },
            comments: false,
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new BrowserSyncPlugin({
            proxy: 'http://localhost:3000',
            port: 3001,
            open: true,
            watchTask: true
        })
    ],
    devtool: 'eval'
        //devtool: 'eval-source-map' (for debbug)
}
