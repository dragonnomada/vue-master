const MySQLService = require('./MySQLService')

// async function addTicket({ email, content })

async function addTicket(email, content) {
    const connection = await MySQLService.getConnection()

    const sql = 'INSERT INTO Tickets (email, content) VALUES (?, ?)'

    const params = [email, content]

    const [result] = await connection.execute(sql, params)

    const ticket = await getTicketById(result.insertId)

    return ticket
}

// const a = [1, 2, 3]
// const [x, y, z] = a
// const [x] = a

async function getTicketById(ticketId) {
    const connection = await MySQLService.getConnection()

    const sql = 'SELECT * FROM Tickets WHERE ticketId=?'

    const params = [ticketId]

    const [rows] = await connection.execute(sql, params)

    const tickets = rows
    // const tickets = rows.map(row => ({ ...row, password: cipher(row.password) }))

    if (tickets.length === 0) throw new Error('[TicketService S001] Not ticket by id')

    if (tickets.length > 1) throw new Error('[TicketService S001] Ilegal ticket id')

    const [ticket] = tickets

    return ticket
}

async function getTickets() {
    const connection = await MySQLService.getConnection()

    const sql = 'SELECT * FROM Tickets'

    const params = []

    const [rows] = await connection.execute(sql, params)

    const tickets = rows

    return tickets
}

module.exports = {
    addTicket,
    getTicketById,
    getTickets,
}