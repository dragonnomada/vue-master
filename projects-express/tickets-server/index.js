// IMPORTS
const express = require('express')
const cors = require('cors')

// IMPORT MAIN SERVICES 
// const myService = require('./services/myService')
const MySQLService = require('./services/MySQLService')

// IMPORT ROUTES
// const myApiRoute = require('./routes/myApi')
const ticketsRouter = require('./routes/tickets')

// MAIN APP
const app = express()

// CONFIGURE ROUTES
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/api/myApi', myApiRouter)
app.use('/api/tickets', ticketsRouter)

// CONFIGURE SERVICES
// myService.init(config).catch(error => console.log(error) && process.exit())
MySQLService.init({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'TicketSup',
}).catch(error => console.log(error) && process.exit())

// LISTEN SERVER
app.listen(5000, () => console.log('Server started at: http://localhost:5000/ (Press ctrl+c to stop)'))