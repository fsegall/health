import { Router } from 'express';

import { CreateIndigeanousInterviewController } from '../controllers/CreateIndigeanousInterviewController';

const indigeanousInterviewRouter = Router();

const createIndigeanousInterviewController = new CreateIndigeanousInterviewController();

indigeanousInterviewRouter.post(
  '/',
  createIndigeanousInterviewController.handle,
);

export { indigeanousInterviewRouter };
