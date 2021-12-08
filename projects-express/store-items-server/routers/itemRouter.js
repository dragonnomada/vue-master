const express = require('express')

const ItemService = require('../services/ItemService')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const items = await ItemService.getItems()
        response.status(200).json(items)
    } catch (error) {
        response.status(500).send(`${error}`)
    }
})


router.put('/add', async (request, response) => {
    const { name, status } = request.body

    try {
        const item = await ItemService.addItem(name, status)
        response.status(200).json(item)
    } catch (error) {
        response.status(500).send(`${error}`)
    }
})


router.get('/item/:itemId', async (request, response) => {
    const { itemId } = request.params

    try {
        const item = await ItemService.getItemById(itemId)
        response.status(200).json(item)
    } catch (error) {
        response.status(500).send(`${error}`)
    }
})

router.get('/:name/:status', async (request, response) => {
    const { name, status } = request.params

    try {
        const items = await ItemService.getItemsByNameAndStatus(name, status)
        response.status(200).json(items)
    } catch (error) {
        response.status(500).send(`${error}`)
    }
})

module.exports = router