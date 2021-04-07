const assert = require('chai').assert
const faker = require('faker')

const mycrypto = require('../../src/helpers/mycrypto')


describe('Crypto Helper Tool', async () => {


    it('should be encrypt password', async () => {

        const pass = 'I0yk0w04WYaFsZ_myIHgqz6NIYliCNiF'
        const salt = '$2b$10$CFhxPbcy0Glrjq0/LPJn5.'
        const expectedEncryptedPassword = '$2b$10$CFhxPbcy0Glrjq0/LPJn5.HaOYKSzAQXXnQetkW746RrKMz1jkPm2'

        const { encryptedPassword }  = await mycrypto.encryptPassword(pass, salt)
        assert.equal(encryptedPassword, expectedEncryptedPassword)
    })

    it('should be return TRUE in compare passwords', async () => {

        const password = faker.internet.password(32)
        const { encryptedPassword, salt } = await mycrypto.encryptPassword(password, null)

        const resultComparePassword = await mycrypto.comparePassword(password, salt, encryptedPassword)
        assert.equal(resultComparePassword, true)

    })

})