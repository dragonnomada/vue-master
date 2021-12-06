const fs = require('fs')

console.log('Loading Vue config...')

const https = {
    key: fs.readFileSync('./certs/alice_key.pem', 'utf-8'),
    cert: fs.readFileSync('./certs/alice_cert.pem', 'utf-8'),
}

console.log({ https })

module.exports = {
    devServer: {
        https,
        public: 'https://localhost:8080/'
    }
}