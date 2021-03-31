const fs = require('fs')

const texto = "Curso de node.js bglablabla"

const file = fs.writeFile('./curso.txt', texto, () => {
    console.log('ESCRITA CONCLUIDA')
})


console.log('mensagem fora do callback')