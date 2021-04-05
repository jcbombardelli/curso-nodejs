const mysql = require('mysql')
const mycrypto = require('./src/helpers/mycrypto')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'development',
//     database: 'cursonodejs',
//     port: 3306
// })


// const email = 'jc.bombardelli3@gama.academy'
// const password = 'q1w2e3r4t5'

// //jc.bombardelli3@gama.academy	
// //$2b$10$29L2Q374X7vXWRUZLXEQjO	
// //$2b$10$29L2Q374X7vXWRUZLXEQjOmD4kKhszgz6ZkrTqBXgfSuvNw062Ml.


// mycrypto.encryptPassword(password, null)
//     .then(crypto => {
//         console.log(crypto)
//         const sqlStatement = `
//             INSERT INTO users (email, password, salt)
//             VALUES ("${email}", "${crypto.encryptedPassword}", "${crypto.salt}");`

//             execute(sqlStatement)
//                 .then(resultado => console.log(resultado))
//     })




// const execute = (sqlStatement) => {
//     return new Promise((resolve, reject) => {
//         connection.query(sqlStatement, (err, result) => {
//             if(err) reject(err)
//             else resolve(result)

//             connection.end()
//         })
//     })
// }



const email = 'jc.bombardelli3@gama.academy'
const salt  = '$2b$10$29L2Q374X7vXWRUZLXEQjO'
const senhaCriptografada = '$2b$10$29L2Q374X7vXWRUZLXEQjOmD4kKhszgz6ZkrTqBXgfSuvNw062Ml.'


const emailDigitado = 'jc.bombardelli3@gama.academy'
const senhaDigitada = 'q1w2e3r4t5'


mycrypto.comparePassword(senhaDigitada, salt, senhaCriptografada)
    .then(senhasConferem => {
        if(senhasConferem) console.log('senhas Conferem')
        else console.log('senhas não conferem')
    })