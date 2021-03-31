let salarioBruto = 1000
let salarioLiquido


//Funcao A
function calculaSalario(salarioBruto, callback) {

    const inss = salarioBruto * 0.11
    const vr = salarioBruto * 0.05

    const descontos = inss + vr
    const liquido = salarioBruto - descontos

    return callback(liquido)

}

                            //FUNCAO B
calculaSalario(salarioBruto, function(salarioLiquidoCalculado) {
    setTimeout(() =>  console.log(`O salário liquido é R$ ${salarioLiquidoCalculado}`), 3000)
   
})



console.log('Minha mensagem')