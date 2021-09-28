module.exports = process.env.NODE_ENV === 'PRODUCTION'
    ? require('./webpack.config.prod')
    : require('./webpack.config.dev');