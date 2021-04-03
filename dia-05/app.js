const server = require('./server')


server.then(hapi => {
        console.log(`Because I'm hapi on http://${process.env.HOST}:${process.env.PORT}`)
        hapi.start()
    })