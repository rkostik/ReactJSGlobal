const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist'),
        chunkFilename: '[name].bundle.js'
    },
    resolve: {
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "util": false,
            "buffer": false,
            "vm": false,
            "os": false,
            "assert": false,
            "uglify-js": false,
            "esbuild": false,
            "worker_threads": false,
            "child_process": false,
            "constants": false,
            "@swc/core": false,
            "inspector": false
        }
    },
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
    },
    devtool: 'source-map',
    devServer: {
        compress: true,
        port: 9000,
        open: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
        }
    )],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    }
};