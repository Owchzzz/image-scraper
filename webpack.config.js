var path = require('path');
var UglifyJS = require('uglifyjs-webpack-plugin');

module.exports = {
   
    entry:'./src',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'imagescraper.bundle.js',
        library: 'imagescraper',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module : {
        loaders: [

            // Babel Loader
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: /src/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader','css-loader','sass-loader']
            }
        ]   
    },
    // Initialize plugins
    plugins: [
        new UglifyJS()
    ],
    resolve: {
        modules: ['src','node_modules']
    },
    devServer: {
        inline:true,
        host: 'localhost',
        port:8080,
        progress:true,
        publicPath:'/dist/',
        hot: true,
    }
}