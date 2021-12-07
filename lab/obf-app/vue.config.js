const WebpackJavascriptObfuscatorPlugin = require('webpack-javascript-obfuscator-plugin')

console.log('Configuring Vue...')

module.exports = {
  configureWebpack: {
    plugins: [
      new WebpackJavascriptObfuscatorPlugin({ 
        compact: true 
      })
    ]
  },
}