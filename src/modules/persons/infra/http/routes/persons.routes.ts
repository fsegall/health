import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import PersonsController from '@modules/persons/infra/http/controllers/PersonsController';
import FamilyMembersController from '@modules/persons/infra/http/controllers/FamilyMembersController';
import HouseholdsController from '@modules/households/infra/http/controllers/HouseholdsController';
const personsController = new PersonsController();
const familyMembersController = new FamilyMembersController();
const householdsController = new HouseholdsController();
const personsRouter = Router();

personsRouter.use(ensureAuthenticated);

personsRouter.get('/:id', personsController.show);

personsRouter.get('/', personsController.list);

personsRouter.post('/', personsController.create);

personsRouter.put('/', personsController.update);

personsRouter.delete('/:id', personsController.delete);

personsRouter.get('/:id/family', familyMembersController.list);

personsRouter.get('/:id/household', householdsController.show);

export default personsRouter;
