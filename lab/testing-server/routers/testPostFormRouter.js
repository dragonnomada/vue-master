const express = require('express')

const TestService = require('../services/TestService')

const router = express.Router()

router.post('/', async (request, response) => {
    try {
        const result = await TestService.testBody(request.body)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).send(`${error}`)
    }
})

module.exports = router