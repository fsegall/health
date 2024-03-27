import { Router } from 'express';

import { Roles } from '@modules/users/authorization/constants';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import Role from '@modules/users/infra/http/middlewares/ensurePermission';

import { CreateIndigenousAlimentacaoNutricaoController } from '../controllers/CreateIndigenousAlimentacaoNutricaoController';
import { CreateIndigenousApoioEProtecaoController } from '../controllers/CreateIndigenousApoioEProtecaoController';
import { CreateIndigeanousInterviewController } from '../controllers/CreateIndigenousInterviewController';
import { CreateIndigeanousInterviewDemographyController } from '../controllers/CreateIndigenousInterviewDemographyController';
import { CreateIndigeanousInterviewResidenceController } from '../controllers/CreateIndigenousInterviewResidenceController';
import { CreateIndigenousSaudeDoencaController } from '../controllers/CreateIndigenousSaudeDoencaController';
import { HandleOfflinetInterviewsController } from '../controllers/HandleOfflineInterviewsController';
import { ListIndigenousInterviewController } from '../controllers/ListIndigenousInterviewController';

const indigeanousInterviewRouter = Router();

const createIndigenousInterviewController = new CreateIndigeanousInterviewController();
const createIndigenousInterviewDemographyController = new CreateIndigeanousInterviewDemographyController();
const createIndigenousInterviewResidenceController = new CreateIndigeanousInterviewResidenceController();
const createIndigenousSaudeDoencaController = new CreateIndigenousSaudeDoencaController();
const createIndigenousApoioFinanceiroController = new CreateIndigenousApoioEProtecaoController();
const createIndigenousAlimentacaoNutricaoController = new CreateIndigenousAlimentacaoNutricaoController();
const listIndigenousInterviewController = new ListIndigenousInterviewController();
const handleOfflineInterviewsController = new HandleOfflinetInterviewsController();

indigeanousInterviewRouter.use(ensureAuthenticated);
indigeanousInterviewRouter.post(
  '/',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createIndigenousInterviewController.handle,
);
indigeanousInterviewRouter.get(
  '/page/:page/limit/:limit',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  listIndigenousInterviewController.handle,
);
indigeanousInterviewRouter.post(
  '/demography',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createIndigenousInterviewDemographyController.handle,
);

indigeanousInterviewRouter.post(
  '/residence',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createIndigenousInterviewResidenceController.handle,
);

indigeanousInterviewRouter.post(
  '/health-desease',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createIndigenousSaudeDoencaController.handle,
);

indigeanousInterviewRouter.post(
  '/support',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createIndigenousApoioFinanceiroController.handle,
);

indigeanousInterviewRouter.post(
  '/nutrition',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createIndigenousAlimentacaoNutricaoController.handle,
);

indigeanousInterviewRouter.post(
  '/handle-offline-data',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  handleOfflineInterviewsController.handle,
);

export { indigeanousInterviewRouter };
