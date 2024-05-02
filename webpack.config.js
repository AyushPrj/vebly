const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'libs/builder/builder.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    
};