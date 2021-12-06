const package = require('../package.json')

async function info() {
    return {
        version: package.version,
        masterKey: process.env.MASTER_KEY,
        port: process.env.PORT,
        host: process.env.HOST,
    }
}

module.exports = {
    info
}