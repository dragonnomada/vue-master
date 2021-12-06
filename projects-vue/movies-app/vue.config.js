const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    configureWebpack: {
        plugins: [
            new JavaScriptObfuscator({
                compact: false,
                // selfDefending: true,
                // disableConsoleOutput: true,
                renameGlobals: true,
                renameProperties: false,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 1,
                numbersToExpressions: true,
                simplify: true,
                stringArrayShuffle: true,
                splitStrings: true,
                stringArrayThreshold: 1
            })
        ]
      }
}