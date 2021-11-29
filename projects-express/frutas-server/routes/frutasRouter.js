// PERFIL: PROGRAMADOR
// HINT: Programador Node JS | EXPRESS JS | JSON | JAVASCRIPT
// * Manejo de Entradas y Salidas de Datos (request, response)
// * Consumir los servicios correctamente (seguridad, middlewares, validaciones, ...)

// Los routers (o rutas) son controladores funcionales (request, response) =>
// Que acceden a los datos de la petición web y devuelven los resultados en la respuesta

// Importamos Express JS para poder crear un Router
const express = require('express')

// Importamos los servicios que estaremos utilizando
// .. - regresa a la carpeta anterior
// /services - ve a la carpeta de servicios
// /frutasService - importa lo exportado en frutasService.js
const { getFrutasAll } = require('../services/frutasService')

// Creamos un router, para controlar todas las sub-rutas a partir de /
// Este router puede ser usado (montado) mediante app.use(<baseUrl>, <router>)
const router = express.Router()

// Definimos las rutas que será capaz de controlar el router

// La ruta principal `<baseUrl>/` (Ej. `/api/frutas/`)
router.get('/', (request, response) => {
    const frutas = getFrutasAll()

    response.send(frutas)
})

// Una ruta secundaria `<baseUrl>/find` (Ej. `/api/frutas/find`)
router.get('/find', (request, response) => {
    response.status(500).send('Not implemented')
})

// Exportamos el router, para que pueda ser importado desde index.js o quién lo necesite
module.exports = router