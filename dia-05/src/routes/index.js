const { status } = require('../api/controllers/app.controller')
const authController = require('../api/controllers/auth.controller')
const userController = require('../api/controllers/user.controller')

const { LoginRequestDTO, LoginResponseDTO } = require('../api/models/dto/auth.dto')
const Joi = require('joi')


const root = {
  method: "GET",
  path: "/",
  handler: status,
  options: {
      tags: ['api'],
      description: 'Verificação do status da aplicação',
      notes: 'Pode ser utilizado sempre que outra aplicação estiver monitorando'
  }
};


const login = {
    method: 'POST',
    path: '/login',
    handler: authController.login,
    options: {
        tags: ['api', 'login'],
        description: 'Rota de autenticação',
        notes: 'Anotações da rota...',
        validate: {
            payload: LoginRequestDTO,
          },
          response: {
            status: {
              200: LoginResponseDTO,
              400: Joi.any()
            }
        }
    }
}

// const validate = {
//   method: 'GET',
//   path: '/login/verify',
//   handler: authController.validate,
//   options: {
//     tags: ["api", "login"],
//     description: 'Rota para verificaçào do token',
//     notes: 'blablabla blablabla',
//     validate: {
//         headers: Joi.object({'x-access-token': Joi.string().required()}).unknown()
//     },
//   }
// }


const newAccount = {
  method: 'POST',
  path: 'signup',
  handler: userController.newAccount
}


module.exports = [ root, login, 
  //validate
 ]
