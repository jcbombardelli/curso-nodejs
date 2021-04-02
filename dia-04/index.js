console.log(`Execução em ambiente de ${process.env.NODE_ENV}`);

const Hapi = require("@hapi/hapi");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const sum = require("./math");
const inert = require("@hapi/inert");
const vision = require("@hapi/vision");
const hapiswagger = require("hapi-swagger");
const Joi = require('joi')

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: "localhost",
  });

  //Rota Simples
  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return {
        now: Date.now(),
        message: "This is Brazil!!",
      };
    },
  });

  //Rota com erro
  server.route({
    method: "GET",
    path: "/bad",
    handler: (request, h) => {
      return h
        .response({
          message: ReasonPhrases.BAD_REQUEST,
        })
        .code(StatusCodes.BAD_REQUEST);
    },
  });

  //Rota com Parametros por PATH
  server.route({
    method: "GET",
    path: "/accenture/{username?}",
    handler: (request, h) => {
      const user = request.params.username
        ? request.params.username
        : "aluno accenture";
      return `Hello ${user}`;
    },
  });

  server.route({
    method: "GET",
    path: "/query",
    handler: (request, h) => {
      const queryParam = request.query;
      return {
        value: queryParam,
      };
    },
  });

  server.route({
    method: "GET",
    path: "/soma",
    handler: (request, h) => {
      const { a, b } = request.query;
      const result = sum(a, b);

      return {
        value: result,
      };
    },
  });

  server.route({
    method: 'POST',
    path: '/login',
    handler: (request, h) =>{

    },
    options: {
      tags: ['api', 'login'],
      description: 'Rota para autenticação',
      notes: 'Anotações da rota....',
      validate: {
        payload: Joi.object({
          username: Joi.string().required(),
          password: Joi.string().required()
        }).label('LoginRequestDTO')
      },
      response: {
        status: {
          200: Joi.object({
            token: Joi.string().required(),
            auth: Joi.bool().required()
          }).label('LoginResponseDTO'),
          400: Joi.any()

        }
      }
    }
  })

  server.route({
    method: 'POST',
    path: '/signup',
    handler: (request, h) => {
        const payload = request.payload
        return `${payload.username}, sua conta foi criada com sucesso !!!`
    }
  })


  await server.register([
    inert,
    vision,
    {
      plugin: hapiswagger,
      options: {
        info: {
          title: 'Gamabank - Grupo X',
          description: 'Projeto desenvolvido blablalbalbalb balbal',
          version: '1.0'
        }
      }
    }
  ])


  await server.start();
};


process.on('unhandledRejection', (err) => {
  console.error('DEU RUIM AQUI !!!')
  console.error(err)
  process.exit(1)
})


init();
