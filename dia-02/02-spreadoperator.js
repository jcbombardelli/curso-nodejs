let lista = [1, 2, 5]
let listaIncluir = [3, 4]


let arrResult = []
// console.log(lista)
// console.log(listaIncluir)

// let listaExcluir = lista

// console.log(listaExcluir)
// listaExcluir.push(9)
// console.log(listaExcluir , "lista excluir com o 9")
// console.log(lista)

for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    arrResult.push(element)    
}

for (let index = 0; index < listaIncluir.length; index++) {
    const element = listaIncluir[index];
    arrResult.push(element)    
}


arrResult = [...lista, ...listaIncluir]

//Contribuição do Alessandro
//arrResult = [].concat(lista).concat(listaIncluir)

lista.push(90)


console.log(arrResult)
