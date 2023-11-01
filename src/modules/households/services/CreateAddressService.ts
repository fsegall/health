import { inject, injectable } from 'tsyringe';

import Address from '@modules/households/infra/typeorm/entities/Address';

import ICreateAddressDTO from '../dtos/ICreateAddressDTO';
import { IAddressesRepository } from '../repositories/IAddressesRepository';

@injectable()
export default class CreateAddressService {
  constructor(
    @inject('AddressesRepository')
    private readonly addressesRepository: IAddressesRepository,
  ) {}

  public async execute({
    household_id,
    state,
    city,
    post_code,
    neighborhood,
    street_or_location,
    house_number,
    telephone_number,
  }: ICreateAddressDTO): Promise<Address> {
    const address = await this.addressesRepository.create({
      household_id,
      state,
      city,
      post_code,
      neighborhood,
      street_or_location,
      house_number,
      telephone_number,
    });

    return address;
  }
}
