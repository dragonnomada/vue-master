const http = require('http')

const express = require('express')
const cors = require('cors')

const testGetParamsRouter = require('./routers/testGetParamsRouter')
const testGetQueryRouter = require('./routers/testGetQueryRouter')
const testPostFormRouter = require('./routers/testPostFormRouter')
const testPostJsonRouter = require('./routers/testPostJsonRouter')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/test/params', testGetParamsRouter)
app.use('/api/test/query', testGetQueryRouter)
app.use('/api/test/form', testPostFormRouter)
app.use('/api/test/json', testPostJsonRouter)

const server = http.createServer(app)

server.listen(5000, () => {
    console.log('Server started at: http://localhost:5000/')
})