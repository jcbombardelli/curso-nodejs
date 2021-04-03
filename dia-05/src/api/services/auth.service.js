const jwt = require('jsonwebtoken')
const { secret } = require('../../configs/env')
const config = require('../../configs/env')


const sign = async (object) => {

    const token = jwt.sign(object, config.secret, { algorithm: 'HS256', expiresIn: 300 })

    return {
        auth: true,
        token
    }
}

const verify = async (token) => {

    // jwt.verify(token, config.secret, (err, decoded) => {
    //     if(err) return { auth: false, message: 'Failed to authenticated'}
    //     return { auth: true, data: decoded}
    // })

    return new Promise((resolve, reject) => {

        jwt.verify(token, config.secret, (err, decoded) => {
            if(err) reject({ auth: false, message: 'Failed to authenticated'})
    
            resolve({auth: true, data: decoded })
        })
    })
}

module.exports = { sign, verify }