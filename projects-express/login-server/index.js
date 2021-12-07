// npm init -y
// npm install --save dotenv
// npm install --save express
// npm install --save cors
// npm install --save jsonwebtoken
// node .
// npm run start

const path = require('path')

require('dotenv').config({
    path: path.join(process.cwd(), '.env')
})

const http = require('http')

const express = require('express')

const cors = require('cors')

const secureMiddleware = require('./middlewares/secureMiddleware')
const loginRouter = require('./routers/loginRouter')
const helloRouter = require('./routers/helloRouter')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/login', loginRouter)

app.use('/api', secureMiddleware)

app.use('/api/hello', helloRouter)

const server = http.createServer(app)

const port = process.env.PORT
const host = process.env.HOST

server.listen(port, host, () => {
    console.log(`Server started at: http://${host}:${port}/`)
})