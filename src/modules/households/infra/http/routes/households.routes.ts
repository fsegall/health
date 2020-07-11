import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import HouseholdsController from '@modules/households/infra/http/controllers/HouseholdsController';

const householdsController = new HouseholdsController();

const householdsRouter = Router();

householdsRouter.use(ensureAuthenticated);

// householdsRouter.get('/:id', householdsController.show);

householdsRouter.get('/', householdsController.list);

householdsRouter.post('/', householdsController.create);

// householdsRouter.put('/', householdsController.update);

// householdsRouter.delete('/:id', householdsController.delete);

export default householdsRouter;
