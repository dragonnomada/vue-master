const path = require('path')

require('dotenv').config({ path: path.join(process.cwd(), '.env') })

if (process.env.SERVER !== "prod-server") {
    console.log('Invalid port')
    process.exit()
}

const http = require('http')

const express = require('express')

const cors = require('cors')

const helloRouter = require('./routers/helloRouter')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/hello', helloRouter)

const server = http.createServer(app)

// MySQLService.init({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     databse: process.env.DB_NAME,
// })

server.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server started at: http://${process.env.HOST}:${process.env.PORT}/`)
})