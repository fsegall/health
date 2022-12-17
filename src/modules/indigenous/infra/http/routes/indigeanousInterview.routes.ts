import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import { CreateIndigenousAlimentacaoNutricaoController } from '../controllers/CreateIndigenousAlimentacaoNutricaoController';
import { CreateIndigenousApoioEProtecaoController } from '../controllers/CreateIndigenousApoioEProtecaoController';
import { CreateIndigeanousInterviewController } from '../controllers/CreateIndigenousInterviewController';
import { CreateIndigeanousInterviewDemographyController } from '../controllers/CreateIndigenousInterviewDemographyController';
import { CreateIndigeanousInterviewResidenceController } from '../controllers/CreateIndigenousInterviewResidenceController';
import { CreateIndigenousSaudeDoencaController } from '../controllers/CreateIndigenousSaudeDoencaController';
import { ListIndigenousInterviewController } from '../controllers/ListIndigenousInterviewController';

const indigeanousInterviewRouter = Router();

const createIndigenousInterviewController = new CreateIndigeanousInterviewController();
const createIndigenousInterviewDemographyController = new CreateIndigeanousInterviewDemographyController();
const createIndigenousInterviewResidenceController = new CreateIndigeanousInterviewResidenceController();
const createIndigenousSaudeDoencaController = new CreateIndigenousSaudeDoencaController();
const createIndigenousApoioFinanceiroController = new CreateIndigenousApoioEProtecaoController();
const createIndigenousAlimentacaoNutricaoController = new CreateIndigenousAlimentacaoNutricaoController();
const listIndigenousInterviewController = new ListIndigenousInterviewController();

indigeanousInterviewRouter.use(ensureAuthenticated);
indigeanousInterviewRouter.post(
  '/',
  createIndigenousInterviewController.handle,
);
indigeanousInterviewRouter.get('/', listIndigenousInterviewController.handle);
indigeanousInterviewRouter.post(
  '/demography',
  createIndigenousInterviewDemographyController.handle,
);

indigeanousInterviewRouter.post(
  '/residence',
  createIndigenousInterviewResidenceController.handle,
);

indigeanousInterviewRouter.post(
  '/health-desease',
  createIndigenousSaudeDoencaController.handle,
);

indigeanousInterviewRouter.post(
  '/support',
  createIndigenousApoioFinanceiroController.handle,
);

indigeanousInterviewRouter.post(
  '/nutrition',
  createIndigenousAlimentacaoNutricaoController.handle,
);

export { indigeanousInterviewRouter };
