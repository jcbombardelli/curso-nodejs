const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'development',
    database: 'cursonodejs'
})

// connection.connect((err) => {
//     if(err) throw err

//     connection.query('SELECT * FROM cidades', (error, result, fields) => {
//         if(error) throw error
//         console.log(result)
//         connection.end()
//     })

// })

const queryParam = 'santos'

const sqlStatement = `
    SELECT p.nome, c.nome as cidade, c.estado
    FROM pessoas p
    INNER JOIN cidades c on p.cidade = c.id
    WHERE c.nome = "${queryParam}"`

connection.connect(err => {
    if(err) throw err

    connection.query(sqlStatement, (err, result, fields) => {
        if(err) throw err
        console.log(result[0])
        connection.end()
    })
})
