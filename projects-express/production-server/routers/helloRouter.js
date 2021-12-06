const express = require('express')

const HelloService = require('../services/HelloService')

const router = express.Router()

router.get('/', async (request, response) => {
    const info = await HelloService.info()
    response.status(200).json(info)
})

module.exports = router