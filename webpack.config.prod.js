const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        chunkFilename: '[name].bundle.js'
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
                    // [style-loader](/loaders/style-loader)
                    {loader: 'style-loader'},
                    // [css-loader](/loaders/css-loader)
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            url: true
                        }
                    }
                ]
            },
            {
                test: /\.(svg|jpg|webp|png)$/i,
                type: 'asset'
            },
            {
                test: /\.(woff|woff2|ttf|otf)$/,
                loader: 'file-loader',
                include: [/fonts/],

            },
        ],
    }
};