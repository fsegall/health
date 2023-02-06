import { Router } from 'express';

import HouseholdsController from '@modules/households/infra/http/controllers/HouseholdsController';
import { Roles } from '@modules/users/authorization/constants';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import Role from '@modules/users/infra/http/middlewares/ensurePermission';

const householdsController = new HouseholdsController();

const householdsRouter = Router();

householdsRouter.use(ensureAuthenticated);

householdsRouter.post(
  '/',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  householdsController.create,
);

export default householdsRouter;
