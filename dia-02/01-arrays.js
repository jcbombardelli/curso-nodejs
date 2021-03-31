const mesesAno = ['janeiro', 'fevereiro', 'março', 'abril',
'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 
'novembro']

//For "normal"
// for (let index = 0; index < mesesAno.length; index++) {
//     console.log(mesesAno[index])
// }

//For OF
// for (let mes of mesesAno) {
//     console.log(mes)
// }

//For IN
// for(let index in mesesAno){
//     console.log(index)
//     console.log(mesesAno[index])
// }


// For IN para percorrer chaves de um objeto
// const objeto = {
//     continent: 'Africa',
//     country: 'Kenya',
//     city: 'Nairobi'
// }

// for(let key in objeto)
//     console.log(key)



//Função como passagem de parametro no FOREACH
// const numeros = [2,5,9]
// function logArrayElements(element, index, array) {
//     console.log(`numeros[${index}] = ${element}`);
// }
// numeros.forEach(logArrayElements)


const filterMeses = mesesAno.filter((mes) => mes.substr(0,1) === 'j') //Retorna varios valores
// const novoFilterMeses = []
// for (const mes of mesesAno) {
//     if(mes.substr(0,1) === 'j')
//         novoFilterMeses.push(mes)
// }

const findMeses = mesesAno.find((mes) => mes.substr(0,2) === 'ju') //Retorna somente a primeira ocorrencia
// let novoFilterMeses = ''
// for (const mes of mesesAno) {
//     if(mes.substr(0,2) === 'ju'){
//         novoFilterMeses = mes
//         break;
//     }
// }


const mapMeses = mesesAno.map(mes => {
    return {
        mes: mes,
        length: mes.length
    }
})
// const arrayMap = []
// for (const mes of mesesAno) {
//     arrayMap.push({
//         mes: mes,
//         length: mes.length
//     })
// }


//const result = mesesAno.filter(mes => {}).map(mesFiltrado => {}).



console.log(arrayMap)