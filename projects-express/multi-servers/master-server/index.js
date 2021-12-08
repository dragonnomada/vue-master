const path = require('path')
const fs = require('fs')

const https = require('https')

const express = require('express')

const cors = require('cors')

const authMiddleware = require('./middlewares/authMiddleware')

const secureRouter = require('./routers/secureRouter')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', authMiddleware)

app.use('/secure', secureRouter)


const server = https.createServer({
    key: fs.readFileSync(path.join(process.cwd(), 'certs', 'server_key.pem')),
    cert: fs.readFileSync(path.join(process.cwd(), 'certs', 'server_cert.pem')),
    requestCert: true,
	rejectUnauthorized: false,
	ca: [
		fs.readFileSync(path.join(process.cwd(), 'certs', 'server_cert.pem'))
	]
}, app)

server.listen(4433, () => {
    console.log('Master Server started at: https://localhost:4433/')
})