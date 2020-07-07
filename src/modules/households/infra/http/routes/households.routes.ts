import { Router, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import HouseholdsRepository from '@modules/households/infra/typeorm/repositories/HouseholdsRepository';
import CreateHouseholdService from '@modules/households/services/CreateHouseholdService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const householdsRouter = Router();

householdsRouter.use(ensureAuthenticated);

householdsRouter.get('/', async (request: Request, response: Response) => {
  console.log(request.user);
  const householdsRepository = getCustomRepository(HouseholdsRepository);
  const households = await householdsRepository.find();
  return response.json(households);
});

householdsRouter.post('/', async (request: Request, response: Response) => {
  const {
    person_id,
    household_main_person,
    relationship_to_main_person,
    location_of_residence,
    type_of_residence,
    number_of_rooms,
    number_of_people_household,
    family_income,
    drinking_water,
    bathroom_inside_house,
    garbage_service,
  } = request.body;

  const createHousehold = new CreateHouseholdService();

  const household = await createHousehold.execute({
    person_id,
    household_main_person,
    relationship_to_main_person,
    location_of_residence,
    type_of_residence,
    number_of_rooms,
    number_of_people_household,
    family_income,
    drinking_water,
    bathroom_inside_house,
    garbage_service,
  });
  return response.json(household);
});

export default householdsRouter;
