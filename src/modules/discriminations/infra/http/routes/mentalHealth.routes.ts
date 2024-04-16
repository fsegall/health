import { Router } from 'express';

import { CreateMentalHealthController } from '@modules/discriminations/controllers/CreateMentalHealthController';

const createMentalHealthController = new CreateMentalHealthController();

const mentalHealthRouter = Router();

mentalHealthRouter.post('/', createMentalHealthController.handle);

export { mentalHealthRouter };
