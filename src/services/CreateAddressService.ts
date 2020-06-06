import Address from '../models/Address';
import { getRepository } from 'typeorm';
// import AppError from '../errors/AppError';
// The Service has no access to Request and Response
interface Request {
  household_id: string;
  state: string;
  city: string;
  post_code: string;
  neighborhood: string;
  street_or_location: string;
  house_number: number;
  telephone_number: string;
}

export default class CreateAddressService {
  public async execute({
    household_id,
    state,
    city,
    post_code,
    neighborhood,
    street_or_location,
    house_number,
    telephone_number,
  }: Request): Promise<Address> {
    const addressesRepository = getRepository(Address);

    const address: Address = addressesRepository.create({
      household_id,
      state,
      city,
      post_code,
      neighborhood,
      street_or_location,
      house_number,
      telephone_number,
    });

    // Save to db
    await addressesRepository.save(address);

    // returns to http request
    return address;
  }
}
