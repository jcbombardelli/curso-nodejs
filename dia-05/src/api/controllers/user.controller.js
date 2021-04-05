const service = require('../services/user.service')
const User = require('../models/user')


const newAccount = async (request, h) =>{


    const user = new User(request.payload)
    const result = await service.createAccount(user)

    return result

}

module.exports = {
    newAccount
}