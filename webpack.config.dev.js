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
            template: './public/index.html'
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