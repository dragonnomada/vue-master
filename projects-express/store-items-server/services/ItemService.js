const mysql2 = require('mysql2/promise')

let connection = null

async function init(options) {
    try {
        connection = await mysql2.createConnection(options)
    } catch(error) {
        console.log(`Error while connect MySQL`)
        console.log(`${error}`)
        process.exit()
    }
}

async function deinit() {
    const connection = await getConnection()
    await connection.close()
}

function getConnection() {
    if (connection === null) throw new Error('Invalid mysql connection')
    return connection
}

const ITEM_STATUS = {
    UNKNOWN: -2,
    CREATED: 1,
    VERIFIED: 2,
    DEPRECATED: 3,
    REMOVED: 4,
}

function getStatusByKey(statusKey) {
    switch((`${statusKey}`).toUpperCase()) {
        case 'CREATED': return ITEM_STATUS.CREATED
        case 'VERIFIED': return ITEM_STATUS.VERIFIED
        case 'DEPRECTADED': return ITEM_STATUS.DEPRECATED
        case 'REMOVED': return ITEM_STATUS.REMOVED
        default: return ITEM_STATUS.UNKNOWN
    }
}

function getStatusByValue(statusValue) {
    return (Object.entries(ITEM_STATUS).find((key, value) => value === statusValue) || ['UNKNOWN', ITEM_STATUS.UNKNOWN])[0]
}

async function getItemById(itemId) {
    const sql = 'select * from items where item_id = ? limit 1'

    const params = [itemId]

    const connection = await getConnection()

    const [rows] = await connection.execute(sql, params)

    const items = rows.map(row => ({
        itemId: row.item_id,
        name: row.item_name,
        status: getStatusByValue(row.item_status)
    }))

    return items[0]
}

async function addItem(name, status) {
    const sql = 'insert into items (item_name, item_status) values (?, ?)'

    const params = [name, getStatusByKey(status)]

    const connection = await getConnection()

    const [result] = await connection.execute(sql, params)

    return await getItemById(result.insertId)
}

async function getItems() {
    const sql = 'select * from items'

    const params = []

    const connection = await getConnection()

    const [rows] = await connection.execute(sql, params)

    const items = rows.map(row => ({
        itemId: row.item_id,
        name: row.item_name,
        status: getStatusByValue(row.item_status)
    }))

    return items
}

async function getItemsByNameAndStatus(name, status) {
    const sql = 'select * from items where item_name = ? and item_status = ?'

    const params = [name, getStatusByKey(status)]

    const connection = await getConnection()

    const [rows] = await connection.execute(sql, params)

    const items = rows.map(row => ({
        itemId: row.item_id,
        name: row.item_name,
        status: getStatusByValue(row.item_status)
    }))

    return items
}

module.exports = {
    init,
    deinit,
    getItemById,
    addItem,
    getItems,
    getItemsByNameAndStatus,
    ITEM_STATUS,
}
