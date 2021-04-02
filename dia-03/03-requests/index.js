const fetch = require('node-fetch')



function getPerson(id){
    fetch(`https://swapi.dev/api/people/${id}`)
        .then(response => response.json())
        .then(async (person) => {

            const { homeworld, films, vehicles, starships} = person

            const promiseHomeWorld =  await fetch(homeworld).then(response => response.json())
            person.homeworld = promiseHomeWorld.name

            const promiseFilms = films.map(url => fetch(url).then((response) => response.json()))
            const promiseVehicles = vehicles.map(url => fetch(url).then(response => response.json()))
            const promisesStartships = starships.map(url => fetch(url).then(response => response.json()))

            const startTime = Date.now()
            Promise.all([promiseFilms, promiseVehicles, promisesStartships])
                .then(async (results) => {
                    await Promise.all(results[0]).then(films => films.forEach((film, index) => person.films[index] = film.title))
                    await Promise.all(results[1]).then(vehicles => vehicles.forEach((vehicle, index) => person.vehicles[index] = vehicle.name))
                    await Promise.all(results[2]).then(starships => starships.forEach((starship, index) => person.starships[index] = starship.name))
                })
                .finally(() => {
                    console.log(person)
                    console.info(`Finished in ${(Date.now() - startTime) / 1000} seconds`)
                })
        
            
        })
              

}
getPerson(1)