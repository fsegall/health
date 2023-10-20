import { Router } from 'express';

import FamilyMembersController from '@modules/persons/infra/http/controllers/FamilyMembersController';
import { Roles } from '@modules/users/authorization/constants';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import Role from '@modules/users/infra/http/middlewares/ensurePermission';

const familyMembersRouter = Router();

familyMembersRouter.use(ensureAuthenticated);

const familyMembersController = new FamilyMembersController();

familyMembersRouter.post(
  '/',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  familyMembersController.create,
);

export default familyMembersRouter;
