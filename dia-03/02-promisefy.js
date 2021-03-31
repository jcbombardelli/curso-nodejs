const fs = require('fs')

// const fileContent = fs.readFile(__filename, (err, data) => {
//     if(!err) console.log(String(data)) 
// })


const util = require('util')
const readFilePromise =  util.promisify(fs.readFile)

readFilePromise(__filename)
    .then((data) => console.log(String(data)))
    .catch((err) => console.error(err))
