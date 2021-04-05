const crypto = require('../../helpers/mycrypto')
const { execute } = require('../../helpers/database')


const save = async (user) => {

    if(user instanceof User){
        
        const encrypt = await crypto.encryptPassword(user.password, null)

        const sqlStatement = `
            INSERT INTO users (email, password, salt)
            VALUES ("${email}", "${encrypt.encryptedPassword}", "${encrypt.salt}");`
    
        const result = await execute(sqlStatement)
        return result
    }

    
    
}


const findByUsername = async () => {

}





module.exports = {
    save, 
    findByUsername
}