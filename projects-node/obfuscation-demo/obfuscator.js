const fs = require('fs')
const path = require('path')

const JavaScriptObfuscator = require('javascript-obfuscator');

function obfuscate(source, target) {
    console.log('Obfuscating...', source, target)
    const content = fs.readFileSync(source, 'utf-8')
    const result = JavaScriptObfuscator.obfuscate(content, {
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
    fs.writeFileSync(target, result.getObfuscatedCode(), 'utf-8')
}

const libnames = fs.readdirSync('./lib.source')

for (let libname of libnames) {
    const source = path.join('./lib.source', libname)
    
    if (/\.lib\.[\w\d]+$/.test(source)) continue

    const stat = fs.statSync(source)

    if (stat.isFile()) {
        // const { base, dir, ext, name, root } = path.parse(source)
        // const target = path.join('./lib', `${name}.lib${ext}`)
        const target = path.join('./lib', libname)
        obfuscate(source, target)
    }
}