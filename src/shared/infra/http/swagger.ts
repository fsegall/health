import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API - Pesquisa Nacional Indígena',
      version: '2.0.0',
      description:
        'API REST para gerenciamento de pesquisas nacionais, com foco em entrevistas indígenas e gerais. Sistema offline-first.',
    },
    servers: [
      {
        url: process.env.APP_API_URL || 'http://localhost:3333',
        description: 'Servidor de desenvolvimento',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    './src/shared/infra/http/routes/*.ts',
    './src/modules/**/infra/http/routes/*.ts',
    './src/modules/**/infra/http/controllers/*.ts',
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;

