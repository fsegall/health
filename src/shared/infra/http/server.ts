import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors'; // Para o express pegar os erros dentro uma rota async
import { errors } from 'celebrate';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';

import routes from './routes';
import swaggerFile from './swagger.json';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));

app.use(routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(errors());

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      console.log(err.message);
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
    console.log(err.message);
    return response.status(500).json({
      status: 'error',
      message: err.message,
    });
  },
);

app.listen(3333, () => console.log('Server started on Port 3333!'));
