const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    name: 'server',
    target: 'node',
    entry: './server/index.js',
    devtool: 'source-map',
    externals: [nodeExternals()],
    output: {
        filename: 'serverBundle.js',
        path: path.join(__dirname, '/server-build'),
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, '/styles'),
                ],
                use: [
                    {
                        loader: 'css-loader/locals',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                ]
            }
        ]
    }
}
;