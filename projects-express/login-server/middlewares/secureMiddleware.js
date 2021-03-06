// Los middlewares tienen la finalidad de validar rutas y determinar si pasan a la siguiente
// Por ejemplo, validamos /api, para que todas las subrutas sean pre-procesadas
// aquí podemos determinar si la siguiente ruta pasa o no (usando next)

const LoginService = require('../services/LoginService')

module.exports = async (request, response, next) => {
    // Obtener el token de la petición
    const { username, deviceId, token } = request.query

    const isValid = await LoginService.verifyToken(username, deviceId, token)

    if (!isValid) {
        // Rechazamos la petición hacia cualquier /api/**
        response.status(401).send('Unathorized: Invalid username / token')
        return
    }

    // Podemos personalizar datos hacia la siguiente ruta
    request.auth = {
        username,
        deviceId,
        token,
        isValid: true
    }

    // Consumimos la petición hacia la ruta siguiente /api/**
    next()
}