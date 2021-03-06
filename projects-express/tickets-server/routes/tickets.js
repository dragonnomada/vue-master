const express = require('express')

const TicketsService = require('../services/TicketsService')

const router = express.Router()

// GET /tickets
router.get('/', async (request, response) => {
    try {
        const tickets = await TicketsService.getTickets()
        response.send(tickets)
    } catch (error) {
        response.status(500).send(`${error}`)
    }
})
// curl http://localhost:5000/api/tickets

// Destructing - const { x, y } = { x: 123, y: 456, z: 789 } // x = 123 | y = 456

// PUT /tickets/add
// { "email": "<example@domain.com>", "content": "<problem>" }
router.put('/add', async (request, response) => {
    // Creamos la variable email a partir de la clave "email" del objeto `request.body`
    // Creamos la variable content a partir de la clave "content" del objeto `request.body`
    const { email, content } = request.body

    // const ticket = await TicketsService.addTicket({ email, content })
    const ticket = await TicketsService.addTicket(email, content)

    response.send(ticket)
})
// curl -X PUT http://localhost:5000/api/tickets/add \
//  -d '{"email": "alan@gmail.com", "content": "No puedo iniciar sesión"}' \
//  -H 'ContentType: application/json'

// GET /tickets/<ticketId>
router.get('/:ticketId', async (request, response) => {
    const { ticketId } = request.params

    try {
        const ticket = await TicketsService.getTicketById(Number(ticketId))
        response.send(ticket)
    } catch (error) {
        // 200 - ok
        // 401 - Not authorized
        // 404 - Not found
        // 500 - Internal server error
        // 501 - Not allowed
        response.status(500).send(`${error}`)
    }
})
// curl http://localhost:5000/api/tickets/123

module.exports = router