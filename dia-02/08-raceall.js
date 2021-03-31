const promise = Promise.resolve(55)
// const funcPromise = () => {
//     return new Promise((resolve, reject) => {
//         resolve(55)
//     })
// }

const promise2 = Promise.resolve(77)
const promise3 = Promise.resolve(32)

// Promise.all([promise, promise2, promise3])
//     .then(results => {
//         console.log(results[0])
//         console.log(results[1])
//         console.log(results[2])
//     })

Promise.race([promise, promise2, promise3])
    .then(result => {
        console.log(result)
    })