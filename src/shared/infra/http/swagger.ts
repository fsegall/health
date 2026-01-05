import swaggerJsdoc from 'swagger-jsdoc';
import swaggerBase from './swagger-base.json';

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

// Gera swagger a partir dos comentários JSDoc
const swaggerFromDocs = swaggerJsdoc(options);

// Mescla a documentação gerada com a base existente (swagger-base.json)
// Prioriza a documentação gerada (JSDoc) sobre a base estática
const swaggerSpec: any = {
  ...swaggerBase,
  info: {
    ...swaggerBase.info,
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
  paths: {
    ...swaggerBase.paths,
    ...(swaggerFromDocs.paths || {}),
  },
  components: {
    ...swaggerBase.components,
    ...(swaggerFromDocs.components || {}),
  },
};

export default swaggerSpec;

