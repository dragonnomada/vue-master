const http = require('http')

const express = require('express')

const cors = require('cors')

// TODO: Import services
const MovieService = require('./services/MovieService')

// TODO: Import routes
const movieRouter = require('./routes/movieRouter')

const app = express()

// TODO: Config app
app.use(cors()) // allows any origin (avoid lock requests)
app.use(express.json()) // accepts json as body request
app.use(express.urlencoded({ extended: true })) // accepts html forms as body request

// TODO: Config routes
app.use('/api/movies', movieRouter) // http://localhost:5000 /api/movies [/ /add /:movieId /:movieId/director]

// TODO: Initilize services
MovieService.init({
    dbConfig: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'moviesdb'
    }
}).catch(error => {
    console.error(error)
    process.exit()
})

const server = http.createServer(app)

server.listen(5000, () => {
    console.log('Server stated at: http://localhost:5000')
})