# CONFIGURE SERVICES

> Define `init(config)` and `deinit()`

> Set when code throws `throw new Error('[CODE] MESSAGE')`

> Export functionality `module.exports = { init, foo, bar, zip, ..., deinit }`

> Define a service function

```js
async function getItems() {
    const connection = await MySQLService.getConnection()

    const sql = 'SELECT * FROM Items'

    const params = []

    const [rows] = await connection.execute(sql, params)

    const items = rows

    return items
}
```

