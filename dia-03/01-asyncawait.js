
//NODE 15+
// const getPersonByName = async (name) => {

//     const response = { name: 'Luke Skywalker' , weapon: 'Light Saber' }
//     return response

// }
// // getPersonByName('Luke')
// //     .then(result => console.log(result))


// const result = await getPersonByName('Luke')

// console.log('Dado qualquer')



const getPersonByName = async (name) => {

    const response = await sqlQuery()
    const result = response.find(person => person.name === name )
    return result

}

async function sqlQuery() {
    return [{ name: 'Luke Skywalker' , weapon: 'Light Saber' }]
}



getPersonByName('Luke Skywalker')
    .then(result => console.log(result))




