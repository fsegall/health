import { Router } from 'express';

import PersonsController from '@modules/persons/infra/http/controllers/PersonsController';
import { Roles } from '@modules/users/authorization/constants';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import Role from '@modules/users/infra/http/middlewares/ensurePermission';

const personsController = new PersonsController();
const personsRouter = Router();

personsRouter.use(ensureAuthenticated);

personsRouter.post(
  '/',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  personsController.create,
);

export default personsRouter;
