import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Addresses from '@modules/households/infra/typeorm/entities/Address';
import CreateAddressService from '@modules/households/services/CreateAddressService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const addressesRouter = Router();

addressesRouter.use(ensureAuthenticated);

addressesRouter.get('/', async (request: Request, response: Response) => {
  const addressesRepository = getRepository(Addresses);
  const addresses = await addressesRepository.find();
  return response.json(addresses);
});

addressesRouter.post('/', async (request: Request, response: Response) => {
  const {
    household_id,
    state,
    city,
    post_code,
    neighborhood,
    street_or_location,
    house_number,
    telephone_number,
  } = request.body;

  const createAddresses = new CreateAddressService();

  const address = await createAddresses.execute({
    household_id,
    state,
    city,
    post_code,
    neighborhood,
    street_or_location,
    house_number,
    telephone_number,
  });
  return response.json(address);
});

export default addressesRouter;
