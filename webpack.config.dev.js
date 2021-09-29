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
    devtool: 'source-map',
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
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                            url: true
                        }
                    }
                ]
            },
            {
                test: /\.(svg|jpg|webp|png)$/i,
                type: 'asset'
            }
        ],
    }
};