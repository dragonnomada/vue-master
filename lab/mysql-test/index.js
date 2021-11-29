const mysql = require('mysql2/promise');

async function test() {

  const connection = await mysql.createConnection({
    host:'localhost', 
    user: 'root', 
    password: 'password',
    database: 'tienda'
  })

  const [rows, fields] = await connection.execute('SELECT * FROM Productos WHERE Nombre LIKE ?', ['%prueba%'])

  console.log(rows)
  console.log(fields.map(field => field.name))

  const [result] = await connection.execute('INSERT INTO Productos (Codigo, Nombre) VALUES (?, ?)', ['T004', 'Prueba 4'])

  console.log('Affected Rows:', result.affectedRows)
  console.log('Inserted Id:', result.insertId)

  await connection.close()

}

test().catch(error => console.error(error))