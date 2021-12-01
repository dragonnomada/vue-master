export default async function sendTicket(email, content) {
    const response = await fetch('http://localhost:5000/api/tickets/add', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, content })
    })

    if (response.status === 500) {
        const error = await response.text()
        throw new Error(error)
    }

    const ticket = await response.json()

    return ticket
}