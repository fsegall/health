import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import { CreateIndigeanousAlimentacaoNutricaoController } from '../controllers/CreateIndigeanousAlimentacaoNutricaoController';
import { CreateIndigeanousApoioFinanceiroController } from '../controllers/CreateIndigeanousApoioFinanceiroController';
import { CreateIndigeanousInterviewController } from '../controllers/CreateIndigenousInterviewController';
import { CreateIndigeanousInterviewDemographyController } from '../controllers/CreateIndigenousInterviewDemographyController';
import { CreateIndigeanousInterviewResidenceController } from '../controllers/CreateIndigenousInterviewResidenceController';
import { CreateIndigenousSaudeDoencaController } from '../controllers/CreateIndigenousSaudeDoencaController';

const indigeanousInterviewRouter = Router();

const createIndigeanousInterviewController = new CreateIndigeanousInterviewController();
const createIndigeanousInterviewDemographyController = new CreateIndigeanousInterviewDemographyController();
const createIndigeanousInterviewResidenceController = new CreateIndigeanousInterviewResidenceController();
const createIndigeanousSaudeDoencaController = new CreateIndigenousSaudeDoencaController();
const createIndigeanousApoioFinanceiroController = new CreateIndigeanousApoioFinanceiroController();
const createIndigeanousAlimentacaoNutricaoController = new CreateIndigeanousAlimentacaoNutricaoController();

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
  '/support',
  createIndigeanousApoioFinanceiroController.handle,
);

indigeanousInterviewRouter.post(
  '/nutrition',
  createIndigeanousAlimentacaoNutricaoController.handle,
);

export { indigeanousInterviewRouter };
