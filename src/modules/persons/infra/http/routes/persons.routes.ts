import { Router } from 'express';

import PersonsController from '@modules/persons/infra/http/controllers/PersonsController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const personsController = new PersonsController();
const personsRouter = Router();

personsRouter.use(ensureAuthenticated);

personsRouter.post('/', personsController.create);

export default personsRouter;
