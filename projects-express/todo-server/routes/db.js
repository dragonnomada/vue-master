const express = require('express')

const { getConnection, isConnected } = require('../services/MySQLService')
const { install } = require('../services/TodoService')

const router = express.Router()

router.get('/start', async (request, response) => {
    // TODO: Agregar middleware de seguridad

    await getConnection()

    response.send('ok')
})

router.get('/install', async (request, response) => {
    // TODO: Agregar middleware de seguridad
    const { withDemo, demoSize } = request.query

    const result = await install(Boolean(withDemo), Number(demoSize)).catch(error => `${error}`)

    response.send(result)
})

router.get('/status', async (request, response) => {
    // TODO: Agregar middleware de seguridad

    const connected = await isConnected()

    response.send({
        connected
    })
})

module.exports = router