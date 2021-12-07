const express = require('express')

const HelloService = require('../services/HelloService')

const router = express.Router()

router.get('/', async (request, response) => {
    const resource = await HelloService.loadResource()

    response.json(resource)
})

module.exports = router