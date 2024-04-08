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

  public async execute(data: ICreateAddressDTO): Promise<Address> {
    const address = await this.addressesRepository.create(data);

    return address;
  }
}
