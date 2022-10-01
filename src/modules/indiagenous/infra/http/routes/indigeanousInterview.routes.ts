import { Router } from 'express';

import { CreateIndigeanousInterviewController } from '../controllers/CreateIndigeanousInterviewController';
import { CreateIndigeanousInterviewDemographyController } from '../controllers/CreateIndigeanousInterviewDemographyController';

const indigeanousInterviewRouter = Router();

const createIndigeanousInterviewController = new CreateIndigeanousInterviewController();
const createIndigeanousInterviewDemographyController = new CreateIndigeanousInterviewDemographyController();

indigeanousInterviewRouter.post(
  '/',
  createIndigeanousInterviewController.handle,
);
indigeanousInterviewRouter.post(
  '/demography',
  createIndigeanousInterviewDemographyController.handle,
);

export { indigeanousInterviewRouter };
