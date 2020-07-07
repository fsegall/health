import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import PersonsController from '@modules/persons/infra/http/controllers/PersonsController';
const personsRouter = Router();

personsRouter.use(ensureAuthenticated);

/* personsRouter.get('/', async (request: Request, response: Response) => {
  console.log(request.user);
  // const createAppointment = container.resolve(CreateAppointmentService);
  const personsRepository = getCustomRepository(PersonsRepository);
  const persons = await personsRepository.find();
  return response.json(persons);
}); */

const personsController = new PersonsController();

personsRouter.post('/', personsController.create);

export default personsRouter;
