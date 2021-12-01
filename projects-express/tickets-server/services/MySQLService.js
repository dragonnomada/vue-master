const mysql2 = require("mysql2/promise")

let connection = null

async function init(config) {
    connection = await mysql2.createConnection(config)
}

async function deinit() {
    if (connection === null) throw new Error('[MySQLService C001/1] Not connected')
    await connection.close()
}

async function getConnection() {
    if (connection === null) throw new Error('[MySQLService C001/2] Not connected')
    return connection
}

async function insertOne(tableName, fields, values) {
    if (connection === null) throw new Error('[MySQLService C001/3] Not connected')

    // TODO: Validate fields and values match on length
    if (fields.length !== values.length) throw new Error('[MySQLService I001/1] Invalid Length')

    const sql = `INSERT INTO ${tableName} (${fields}) (${fields.map(() => '?')})`

    // TODO: Validate values

    const params = values

    const [result] = await connection.execute(sql, params)

    return result
}

module.exports = {
    init,
    deinit,
    getConnection
}