const swaggerAutogen = require('swagger-autogen')();

const outputFile = './docs/swagger_output.json';
const endpointsFiles = ['./src/app.js'];

const doc = {
  info: {
    version: '1.0.0',
    title: 'SG API',
    description: 'Documentation automatically generated by the <b>swagger-autogen</b> module.',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'user',
      description: 'Endpoints',
    },
  ],
  securityDefinitions: {
    api_key: {
      type: 'apiKey',
      name: 'api_key',
      in: 'header',
    },
    petstore_auth: {
      type: 'oauth2',
      authorizationUrl: 'https://petstore.swagger.io/oauth/authorize',
      flow: 'implicit',
      scopes: {
        read_pets: 'read your pets',
        write_pets: 'modify pets in your account',
      },
    },
  },
  definitions: {
    User: {
      name: 'Jhon Doe',
      age: 29,
      parents: {
        father: 'Simon Doe',
        mother: 'Marie Doe',
      },
      diplomas: [
        {
          school: 'XYZ University',
          year: 2020,
          completed: true,
          internship: {
            hours: 290,
            location: 'XYZ Company',
          },
        },
      ],
    },
    AddUser: {
      $name: 'Jhon Doe',
      $age: 29,
      about: '',
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
