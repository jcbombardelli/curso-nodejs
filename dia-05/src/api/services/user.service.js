const repository = require('../repositories/user.repository')


const createAccount = async (newUser) => {

    // Opcional : verificar no banco de dados se usuario ja existe

    const result = await repository.save(newUser)
    return result
}

module.exports = { createAccount }