const service = require('../services/auth.service')

const login = async (request, h) => {

    const { username, password } = request.payload

    // requisicao ao banco de dados
    const retornoDoBanco = {
        id: 1,
        saldo: 5000
    }

    return await service.sign(
        {
            username, 
            password,
            sub: retornoDoBanco.id,
        })

}


// const validate = async (request, h) => {
//     const token = request.headers['x-access-token']

//     try {
//         const validated = await service.verify(token)
//         return validated
//     } catch (error) {
//         return error
//     }
// }



module.exports = {
    login,
    //validate
}