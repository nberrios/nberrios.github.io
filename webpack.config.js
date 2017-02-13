module.exports = {
    entry: './static/js/entry.js',
    output: {
        path: __dirname,
        filename: './static/js/bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ],
    },
};
