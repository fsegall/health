import { Router } from 'express';

import FamilyMembersController from '@modules/persons/infra/http/controllers/FamilyMembersController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const familyMembersRouter = Router();

familyMembersRouter.use(ensureAuthenticated);

const familyMembersController = new FamilyMembersController();

familyMembersRouter.post('/', familyMembersController.create);

export default familyMembersRouter;
