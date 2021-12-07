const WebpackObfuscator = require('webpack-obfuscator');

console.log('Configuring Vue...')

module.exports = {
  configureWebpack: {
    plugins: [
      new WebpackObfuscator({
        rotateStringArray: true,
      }, [])
    ]
  },
}