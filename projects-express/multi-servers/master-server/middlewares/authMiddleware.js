const AuthService = require('../services/AuthService')

module.exports = async (request, response, next) => {
    const certificate = request.socket.getPeerCertificate();

    try {
        await AuthService.authorize(request.client, certificate)
        next()
    } catch (error) {
        console.log(`${error}`)
        response.status(401).send(`${error}`)
    }

}