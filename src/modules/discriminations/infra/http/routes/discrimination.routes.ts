import { Router } from 'express';

import { CreateDiscriminationController } from '@modules/discriminations/controllers/CreateDiscriminationController';

const createDiscriminationController = new CreateDiscriminationController();

const discriminationRouter = Router();

discriminationRouter.post('/', createDiscriminationController.handle);

export { discriminationRouter };
