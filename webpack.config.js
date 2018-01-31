const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'app': './app.js'
    },
    output: {
        path: path.resolve(__dirname, "./"),
        filename: 'static/js/[name].js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        ['env', { 'modules': false }]
                    ]
                }
            }]
        }, ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./"),
        port: 3000,
    },
    devtool: 'source-map',
};