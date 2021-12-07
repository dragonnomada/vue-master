const express = require('express')

const LoginService = require('../services/LoginService')

const router = express.Router()

router.post('/', async (request, response) => {
    const { username, password } = request.body || {}

    const isValid = await LoginService.signIn(username, password)

    if (!isValid) {
        response.status(401).send('Invalid Sign In')
        return
    }

    const token = await LoginService.generateToken(username)

    response.status(200).json({
        username,
        token
    })
})

module.exports = router