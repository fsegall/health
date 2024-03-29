import { Router } from 'express';

import { Roles } from '@modules/users/authorization/constants';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import Role from '@modules/users/infra/http/middlewares/ensurePermission';

import AddressesController from '../controllers/AddressesController';

const addressesController = new AddressesController();

const addressesRouter = Router();

addressesRouter.use(ensureAuthenticated);

addressesRouter.post(
  '/',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  addressesController.create,
);

export default addressesRouter;
