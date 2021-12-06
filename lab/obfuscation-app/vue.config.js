const JavaScriptObfuscator = require('webpack-obfuscator');

console.log('Configuring Vue...')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new JavaScriptObfuscator({
                rotateStringArray: true,
            }, [])
        ]
    },
    pwa: {},
    pages: {}
}