const http = require('http')

const server = http.createServer((request, response) => {

    console.log(request.url)

    if (request.url === "/api/users") {
        response.write('Users list')

        response.end()

        return
    }

    response.write('Hello Server')

    response.end()

})

server.listen(8000, () => console.log('Server Started At: http://localhost:8000/'))