// IMPORTS
const express = require('express')

// IMPORT MAIN SERVICES 
// const myService = require('./services/myService')

// IMPORT ROUTES
// const myApiRoute = require('./routes/myApi')

// MAIN APP
const app = express()

// CONFIGURE ROUTES
// app.use('/api/myApi', myApiRouter)
// const myService = require('./services/myService')

// CONFIGURE SERVICES
// myService.init(config).catch(error => console.log(error) && process.exit())

// LISTEN SERVER
app.listen(5000, () => console.log('Server started at: http://localhost:5000/ (Press ctrl+c to stop)'))