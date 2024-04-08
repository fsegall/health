import { Router } from 'express';

import { CreateViolenceController } from '@modules/discriminations/controllers/CreateViolenceController';

const createViolenceController = new CreateViolenceController();

const violenceRouter = Router();

violenceRouter.post('/', createViolenceController.handle);

export { violenceRouter };
