const { getConnection, changeDatabase } = require('./MySQLService')

async function installTodoDB() {
    const sql = 'CREATE DATABASE IF NOT EXISTS TodoApp'

    const connection = await getConnection();

    const result = connection.execute(sql)

    console.log(result)

    return true
}

async function useTodoDB() {
    await changeDatabase("TodoApp")
}

async function installTodosTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS Todos (
            TodoId INT PRIMARY KEY AUTO_INCREMENT,
            Title VARCHAR(255) NOT NULL,
            Checked BOOLEAN DEFAULT 0,
            CreateAt DATETIME,
            UpdateAt DATETIME
        )
    `

    const connection = await getConnection();

    const result = connection.execute(sql)

    console.log(result)

    return true
}

async function installTodosDemo(size = 10) {
    for (let i = 0; i < size; i++) {
        await addTodo(`Todo Test Demo ${i + 1}`)
    }
}

async function install(withDemo = false, demoSize = 20) {
    await installTodoDB()
    await useTodoDB()
    if (withDemo) {
        await installTodosDemo(demoSize)
    }
    await installTodosTable()
}

async function getTodos() {
    const sql = 'SELECT * FROM Todos'

    const connection = await getConnection();

    const [rows, fields] = await connection.execute(sql)

    return rows
}

async function getTodoById(todoId) {
    const sql = 'SELECT * FROM Todos WHERE TodoId=?'

    const params = [todoId]

    const connection = await getConnection();

    const [rows, fields] = await connection.execute(sql, params)

    if (rows.length === 0) throw new Error(`[TodoService.getTodoById 001] Not found`)

    return rows[0] // { TodoId: <1>, Title: <'Comprar algo ...'>, Checked: <false> }
}

async function addTodo(title) {
    const sql = 'INSERT INTO Todos (Title) VALUES (?)'

    const params = [title]

    const connection = await getConnection();

    const [result] = await connection.execute(sql, params)

    console.log('Affected Rows:', result.affectedRows)
    console.log('Inserted Id:', result.insertId)

    const todo = await getTodoById(result.insertId)

    return todo
}

module.exports = {
    install,
    addTodo,
    getTodoById,
    getTodos
}