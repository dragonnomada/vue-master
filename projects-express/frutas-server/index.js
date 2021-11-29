// PERFIL: ADMINISTRADOR DEL SERVIDOR
// HINT: Programador Experto | Arquitecto de Software
// * Configurar el servidor (puerto, hostname, librerías, inicializar servicios)
// * Enlazar las rutas y sus version
// * Enlazar la aplicación web (Vue JS)
// * Incrementar la versión del proyecto

// El archivo principal (la aplicación / el servidor)
// Tiene la responsabilidad de instanciar el servidor
// Configurarlo correctamente según las variables de entorno
// Aquí se enlanzan los routes a la aplicación principal (`app`)

// Importamos Express JS para configurar el servidor
const express = require('express')

// Importamos el router que controla el api de frutas
const frutasRouter = require('./routes/frutasRouter')

// Creamos la aplicación principal
const app = express()

// Importamos la definición del proyecto, para obtener la versión
const package = require('./package.json')

// Configuramos la ruta principal para mostrar la versión del proyecto
app.get('/', (request, response) => response.send(`Frutas Server v${package.version}`))

// Enlazamos el router de las frutas en la ruta principal `/api/frutas`
// Todas las sub-rutas definidas en el router, serán a partir de aquí
app.use('/api/frutas', frutasRouter)

// Levantamos (encendemos / escuchamos) el servidor
app.listen(8080, () => console.log('Server started at: http://localhost:8080 (Press ctrl+c to stop)'))