const fetch = require('node-fetch')

// const getPerson = (id) => {

//     fetch(`https://swapi.dev/api/people/${id}`)
//         .then(response => response.json())
//         .then(person => console.log(person))
//         .catch(err => console.error(err))
//         .finally(() => console.log('Acabou a request'))

//     console.log('Depois do fetch')

// }

const getPerson = async (id) => {


    try {
        const reponse = await fetch(`https://swapi.dev/api/people/${id}`)
        const person = await reponse.json()
        
        console.log(person)
        console.log('Depois do fetch')
        
    } catch (error) {
        console.error(error)
    } finally {
        console.log('Acabou a request')
    }



}

getPerson(1)