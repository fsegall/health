import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import { CreateIndigeanousInterviewController } from '../controllers/CreateIndigeanousInterviewController';
import { CreateIndigeanousInterviewDemographyController } from '../controllers/CreateIndigeanousInterviewDemographyController';
import { CreateIndigeanousInterviewResidenceController } from '../controllers/CreateIndigeanousInterviewResidenceController';

const indigeanousInterviewRouter = Router();

const createIndigeanousInterviewController = new CreateIndigeanousInterviewController();
const createIndigeanousInterviewDemographyController = new CreateIndigeanousInterviewDemographyController();
const createIndigeanousInterviewResidenceController = new CreateIndigeanousInterviewResidenceController();

indigeanousInterviewRouter.use(ensureAuthenticated);
indigeanousInterviewRouter.post(
  '/',
  createIndigeanousInterviewController.handle,
);
indigeanousInterviewRouter.post(
  '/demography',
  createIndigeanousInterviewDemographyController.handle,
);
indigeanousInterviewRouter.post(
  '/residence',
  createIndigeanousInterviewResidenceController.handle,
);

export { indigeanousInterviewRouter };
