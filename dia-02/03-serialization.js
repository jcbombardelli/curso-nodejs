const pessoa = {
    nome: 'JC',
    sobrenome: 'Bombardelli',
    idade: 28,
    profissao: 'Reporter'
};


const serializado = JSON.stringify(pessoa)
console.log(serializado)

const objectPlainText = '{"nome":"JC","sobrenome":"Bombardelli","idade":28,"profissao":"Reporter"}'

const newObjectParsed = JSON.parse(objectPlainText)
console.log(newObjectParsed)


