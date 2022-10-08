import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import { CreateIndigeanousApoioFinanceiroController } from '../controllers/CreateIndigeanousApoioFinanceiroController';
import { CreateIndigeanousInterviewController } from '../controllers/CreateIndigeanousInterviewController';
import { CreateIndigeanousInterviewDemographyController } from '../controllers/CreateIndigeanousInterviewDemographyController';
import { CreateIndigeanousInterviewResidenceController } from '../controllers/CreateIndigeanousInterviewResidenceController';
import { CreateIndigeanousSaudeDoencaController } from '../controllers/CreateIndigeanousSaudeDoencaController';

const indigeanousInterviewRouter = Router();

const createIndigeanousInterviewController = new CreateIndigeanousInterviewController();
const createIndigeanousInterviewDemographyController = new CreateIndigeanousInterviewDemographyController();
const createIndigeanousInterviewResidenceController = new CreateIndigeanousInterviewResidenceController();
const createIndigeanousSaudeDoencaController = new CreateIndigeanousSaudeDoencaController();
const createIndigeanousApoioFinanceiroController = new CreateIndigeanousApoioFinanceiroController();

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

indigeanousInterviewRouter.post(
  '/health-desease',
  createIndigeanousSaudeDoencaController.handle,
);

indigeanousInterviewRouter.post(
  '/financial-support',
  createIndigeanousApoioFinanceiroController.handle,
);

export { indigeanousInterviewRouter };
