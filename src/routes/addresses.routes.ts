import { Router, Request, Response } from 'express';
import Addresses from '../models/Address';
import { getRepository } from 'typeorm';
import CreateAddressService from '../services/CreateAddressService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const addressesRouter = Router();

addressesRouter.use(ensureAuthenticated);

addressesRouter.get('/', async (request: Request, response: Response) => {
  console.log(request.user);
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
