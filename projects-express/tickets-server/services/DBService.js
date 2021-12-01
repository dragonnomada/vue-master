const MySQLService = require('./MySQLService')
// const MongoService = require('./MongoService')
// const MSSQLService = require('./MSSQLService')

async function insertOne(tableName, fields, values) {
    // if (process.env.DB === "MYSQL") {
    //     // ...
    // }
    // if (process.env.DB === "MONGO") {
    //     // ...
    // }
    // if (process.env.DB === "MSSQL") {
    //     // ...
    // }

    return await MySQLService.insertOne(tableName, fields, values)
}