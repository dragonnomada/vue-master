const express = require('express')

const TestService = require('../services/TestService')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const result = await TestService.testQuery(request.query)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).send(`${error}`)
    }
})

module.exports = router