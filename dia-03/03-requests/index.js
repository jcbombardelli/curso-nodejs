console.log(process.env.NODE_ENV)
const fetch = require('node-fetch')

const getPerson = (id) => {
    fetch(`https://swapi.dev/api/people/${id}`)
        .then(response => response.json())
        .then(person => console.log(person))
        .catch(err => console.error(err))
        .finally(() => 'termino da request')
}


getPerson(1)
