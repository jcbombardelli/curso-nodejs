const mysql = require('mysql')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'development',
    database: 'cursonodejs',
    port: 3306
})

const execute = (sqlStatement) => {
    return new Promise((resolve, reject) => {
        connection.query(sqlStatement, (err, result) => {
            if(err) reject(err)
            else resolve(result)

            connection.end()
        })
    })
}

module.exports = { execute }