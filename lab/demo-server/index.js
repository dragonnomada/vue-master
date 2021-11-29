const http = require('http')

const express = require('express')

const app = express()

app.get('/', (request, response) => response.send('Hello Express JS'))

const server = http.createServer(app)

server.listen(8080, () => console.log('Server started at http://localhost:8080'))