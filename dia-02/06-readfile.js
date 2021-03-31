const fs = require('fs')


const invocarCapitaoPlaneta = (poderes) => {
    if(poderes.length === 5){
        console.log(poderes)
        console.log('Pela união dos seus poderes, eu sou o capitão planeta')
        console.log('VAI PLANETA!!')
    }
    else {
        console.log('Planeta destruido')
    }
}


const juntarPoderes = () => {

    const poderes = []
    fs.readFile('./poder/terra.json', (err, poder) => {
        const { elemento }  = JSON.parse(poder)
        if(err){
            throw new Error('Voce teve um erro', err) 
        }
        poderes.push(elemento)

        fs.readFile('./poder/fogo.json', (err, poder) => {
            const { elemento }  = JSON.parse(poder)
            if(err){
                throw new Error('Voce teve um erro', err) 
            }
            poderes.push(elemento)

            fs.readFile('./poder/vento.json', (err, poder) => {
                const { elemento }  = JSON.parse(poder)
                if(err){
                    throw new Error('Voce teve um erro', err) 
                }
                poderes.push(elemento)

                fs.readFile('./poder/agua.json', (err, poder) => {
                    const { elemento }  = JSON.parse(poder)
                    if(err){
                        throw new Error('Voce teve um erro', err) 
                    }
                    poderes.push(elemento)
                    invocarCapitaoPlaneta(poderes)

                    fs.readFile('./poder/coracao.json', (err, poder) => {
                        const { elemento }  = JSON.parse(poder)
                        poderes.push(elemento)
                        invocarCapitaoPlaneta(poderes)
                    })
                })
            })
        })
    })



 
}


juntarPoderes()