const http = require('http')

const ItemService = require('./services/ItemService')

const itemRouter = require('./routers/itemRouter')

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/items', itemRouter)

ItemService.init({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'store'
}).catch(() => {})

const server = http.createServer(app)

server.listen(5000, () => {
    console.log('Server started at: http://localhost:5000/')
})
