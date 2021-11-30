const mysql2 = require('mysql2/promise')

let connection = null;

async function connect(database = "TodoApp") {
    connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',        // WARN! Estos datos deberían ser variables de entorno
        password: 'password', // WARN! Estos datos deberían ser variables de entorno
        database,
        connectTimeout: 60000
    })

    return connection
}

async function changeDatabase(database) {
    await closeConnection()
    return await connect(database)
}

async function getConnection() {
    if (connection === null) await connect()
    return connection
}

async function isConnected() {
    return connection !== null
}

async function closeConnection() {
    if (connection === null) throw new Error('[MySQLService: 001] Not connected')
    await connection.close()
}

module.exports = {
    getConnection,
    isConnected,
    closeConnection,
    changeDatabase
}