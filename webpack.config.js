const webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: [
        // ES6 environemnt
        'babel-polyfill',
        // application scripts
        './src/static/js/entry.js'],
    output: {
        path: __dirname,
        filename: './src/static/js/bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.s?css$/,
                loader: 'style-loader!css-loader',
            },
            {
                // only run `.js` + `.jsx` through babel
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ]
            },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
};
