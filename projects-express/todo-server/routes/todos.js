const express = require('express')
const { getTodos, addTodo } = require('../services/TodoService')

const router = express.Router()

router.get('/', async (request, response) => {
    const todos = await getTodos()

    response.send(todos)
})

router.get('/add', async (request, response) => {
    const { title } = request.query

    if (!title) {
        response.status(500).send('Invalid title')
        return
    }

    const todo = await addTodo(title)

    response.send(todo)
})

module.exports = router