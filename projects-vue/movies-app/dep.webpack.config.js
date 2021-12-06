// webpack.config.js
'use strict';

const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: {
        'abc': './src/main.js'
    },
    output: {
        path: 'dist',
        filename: '[name].js' // output: abc.js, cde.js
    },
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
        }, ['abc.js'])
    ]
};