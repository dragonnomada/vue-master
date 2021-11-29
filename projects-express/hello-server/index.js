// Librería que permite recibir peticiones web (HTTP GET | POST | PUT | PATCH | DELETE | ...)
const http = require('http')

// Librería/framework que extiende y simplifica el manejo de peticiones web
// * Posee un modelo de separación de rutas
// * Posee un modelo de procesamiento de rutas basado en middlewares (retricciones por ruta)
// * Posee un modelo de limitación/control de metodos de acceso HTTP (GET | POST | PUT | ...)
const express = require('express')

// Modelo o Control Primario de Express
const app = express()

// app.use(<plugins>)
// app.use(<path>, <routers>)
// app.use(cors())
// app.use(json())
// app.use(urlencoded())

// app.<method>(<path>, <middleware>)
// <method>      all | get | post | put | patch | delete | ...
// <path>        '/' | '/api/users' | '/login' | '/auth/stats' | '/api/users/:userId/create'
// <middleware>  function(request, response, [next]) | (request, response, [next]) => 

// Controla una ruta específica
app.get('/', (request, response) => response.send('Hello Express JS'))

app.get('/hello', (request, response) => response.send('Hello?'))

app.get('/hello/html', (request, response) => response.send('<h1>Hello world</h1>'))

app.get('/hello/json', (request, response) => response.send({ a: 123, b: false, c: new Date() }))

// Crea el servidor http, enlazado a nuestro Control Primario de Express
const server = http.createServer(app)

// Iniciamos el servidor para escuchar peticiones web sobre el puerto 8080
server.listen(8080, () => console.log('Server started at: http://localhost:8080/'))