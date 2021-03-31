const weAreLearning = 'javascript'

// const whatAreWeLearningCallback = (onSucessCallback, onErroCallback ) => {
//     if(weAreLearning !== 'nodejs' && weAreLearning !== 'javascript') {
//         onErroCallback({
//             name: 'This is wrong',
//             message: `${weAreLearning} ? Really !?`
//         })
//     }
//     else {
//         onSucessCallback({
//             name: weAreLearning,
//             message: 'That is so cool!!'
//         })
//     }
// }

// whatAreWeLearningCallback(
//     (success) => {
//         console.log(`${success.name} ? Yeah! ${success.message}` )
//     }, 
//     (error) => {
//         console.log(error.name, error.message)
//     }
// )

// console.log('mensagem')

const whatAreWeLearningPromise = (language) => {
    return new Promise((resolve, reject) => {
        if(language === 'nodejs' || language === 'javascript') {
            resolve({
                name: language,
                message: 'That is so cool!!'
            }) //é tipo o onSucessCallback
        }
        else {
            reject({
                name: 'This is wrong',
                message: language + '? Really!?'
            }) //é tipo onErrorCallback
        }
    })
}

whatAreWeLearningPromise(weAreLearning)
    .then(onSuccess => console.log(onSuccess.name + '? Yeah!' + onSuccess.message)) //resolve
    .catch(onError => console.log( onError.name, onError.message)) //reject
    .finally(() => console.log("FINALMENTE ACABOU"))

console.log('ooooooooooooo')

//ooooooooooooo --> instrução fora da promise
//This is wrong java? Really!? --> catch dentro d apromise
//FINALMENTE ACABOU -- finally da promise