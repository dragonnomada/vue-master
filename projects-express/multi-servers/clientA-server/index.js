const path = require('path')
const fs = require('fs')

const https = require('https')

const axios = require('axios')

const certFile = path.resolve(process.cwd(), 'certs', 'clientA_cert.pem');
const keyFile = path.resolve(process.cwd(), 'certs', 'clientA_key.pem');

const httpsAgent = new https.Agent({
    cert: fs.readFileSync(certFile),
    key: fs.readFileSync(keyFile),
    rejectUnauthorized: false
})

async function test() {
    const serverUrl = 'https://localhost:4433/secure/secret'

    try {
        const response = await axios.get(serverUrl, {
            httpsAgent
        })
        console.log(response.status)
        console.log(response.statusText)
        console.log(response.data)
    } catch (error) {
        console.log(`${error}`)
    }
}

test().catch(error => console.log(`${error}`))