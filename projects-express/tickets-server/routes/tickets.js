const express = require('express')

const TicketsService = require('../services/TicketsService')

const router = express.Router()

// GET /tickets
router.get('/tickets', async (request, response) => {
    const tickets = await TicketsService.getTickets()
    response.send(tickets)
})

// Destructing - const { x, y } = { x: 123, y: 456, z: 789 } // x = 123 | y = 456

// PUT /tickets/add
// { "email": "<example@domain.com>", "content": "<problem>" }
router.put('/tickets/add', async (request, response) => {
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
router.get('/tickets/:ticketId', async (request, response) => {
    const { ticketId } = request.params

    const ticket = await TicketsService.getTicketById(Number(ticketId))

    response.send(ticket)
})
// curl http://localhost:5000/api/tickets/123

module.exports = router