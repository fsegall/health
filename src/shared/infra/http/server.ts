import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors'; // Para o express pegar os erros dentro uma rota async
import { errors } from 'celebrate';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';

// eslint-disable-next-line import/no-unresolved
import uploadConfig from '@config/upload';
// eslint-disable-next-line import/no-unresolved
import AppError from '@shared/errors/AppError';

import routes from './routes';
import swaggerSpec from './swagger';

// eslint-disable-next-line import/no-unresolved
import '@shared/infra/typeorm';
// eslint-disable-next-line import/no-unresolved
import '@shared/container';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));

app.use(routes);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error - swagger-ui-express type conflict with express types (works at runtime)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
