const http = require('http')

const express = require('express')

const cors = require('cors')

// TODO: Import services

// TODO: Import routes

const app = express()

// TODO: Config app
app.use(cors()) // allows any origin (avoid lock requests)
app.use(express.json()) // accepts json as body request
app.use(express.urlencoded({ extended: true })) // accepts html forms as body request

// TODO: Config routes

// TODO: Initilize services

const server = http.createServer(app)

server.listen(5000, () => {
    console.log('Server stated at: http://localhost:5000')
})