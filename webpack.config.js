module.exports = process.env.NODE_ENV === 'development'
    ? require('./webpack.config.prod')
    : require('./webpack.config.dev');