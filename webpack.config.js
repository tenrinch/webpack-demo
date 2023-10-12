const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './app.js',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Webpack demo app',
            header: 'Webpack demo app',
            metaDesc: 'Webpack description',
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    mode: 'development',
    output: {
        clean: true
    },
    devServer: {
        contentBase: './dist',
        open: true
    }
};