const bcrypt = require('bcrypt')

module.exports = {

    encryptPassword: async (password, salt) => {
        if(!salt) salt = await bcrypt.genSalt()
        return {
            encryptedPassword: bcrypt.hashSync(password, salt),
            salt: salt
        }
    },


    comparePassword: async (password, salt, encryptedPasswordToCompare) => {
        const encryptPassword = bcrypt.hashSync(password, salt)
        
        return encryptPassword === encryptedPasswordToCompare
    }

}