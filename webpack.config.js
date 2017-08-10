const path = require('path');

const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output:{
        filename:'bundle.js',
        publicPath: "/public/",
        path: path.resolve(__dirname, 'public')
    },
    watch:true,
    devtool: 'cheap-module-eval-source-map',
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=/public/icons/[name].[ext]"
            }

        ]
    }
};
