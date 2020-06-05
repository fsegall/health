import { Router, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import PersonsRepository from '../repositories/PersonsRepository';
import CreatePersonService from '../services/CreatePersonService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import { parseISO } from 'date-fns';

const personsRouter = Router();

personsRouter.use(ensureAuthenticated);

personsRouter.get('/', async (request: Request, response: Response) => {
  console.log(request.user);
  const personsRepository = getCustomRepository(PersonsRepository);
  const persons = await personsRepository.find();
  return response.json(persons);
});

personsRouter.post('/', async (request: Request, response: Response) => {
  const {
    interviewer_id,
    name,
    date_of_birth,
    gender,
    race_color,
    religion,
    marital_status,
    literacy,
    education,
    work_status,
    health_conditions,
  } = request.body;

  const createPerson = new CreatePersonService();

  const person = await createPerson.execute({
    interviewer_id,
    name,
    date_of_birth: parseISO(date_of_birth),
    gender,
    race_color,
    religion,
    marital_status,
    literacy,
    education,
    work_status,
    health_conditions,
  });
  return response.json(person);
});

export default personsRouter;
