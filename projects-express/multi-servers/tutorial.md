# Server To Server Security Tutorial

## 1. (Master Server) Crear un Servidor Maestro que sólo provea recursos a otros servidores

> Generar las claves para firmar certificados

    openssl req \
        -x509 \
        -newkey rsa:4096 \
        -keyout master_key.pem \
        -out master_cert.pem \
        -nodes \
        -days 365 \
        -subj "/CN=Master/O=Master Certificate Server"

* **Nota:** Se generan las llaves de firmado `master_key.pem` y `master_cert.pem`

## 2. (Client Server) Crear una solicitud de certificado que pueda ser firmado por el servidor

> Generar la solicitud de certificado (`csr`)

    openssl req \
        -newkey rsa:4096 \
        -keyout clientA_key.pem \
        -out clientA_csr.pem \
        -nodes \
        -days 365 \
        -subj "/CN=ClientA"

* **Nota:** Se generaran la llave de la solicitud `clientA_key.pem` y la solicitud de certificado `clientA_csr.pem`

## 3. (Master Server) Firmar la solicitud de certificado generando el certificado de cliente ya firmado

> Firmar la solicitud de certificado (`csr`) con las llaves del servidor

    openssl x509 \
        -req \
        -in clientA_csr.pem \
        -CA ..\..\master_cert.pem \
        -CAkey ..\..\master_key.pem \
        -out clientA_cert.pem \
        -set_serial 01 \
        -days 365

* **Nota:** Se genera el certificado firmado del cliente `clientA_cert.pem` que puede utilizar el cliente. No se debe olvidar darle el certificado al cliente para su uso.

## 4. Consumir en cualquier servidor cliente los recursos del servidor maestro

```js
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
```

