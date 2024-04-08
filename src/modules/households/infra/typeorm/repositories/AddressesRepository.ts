import { Repository, getRepository } from 'typeorm';

import ICreateAddressDTO from '@modules/households/dtos/ICreateAddressDTO';
import { IAddressesRepository } from '@modules/households/repositories/IAddressesRepository';

import Address from '../entities/Address';

export class AddressesRepository implements IAddressesRepository {
  private repository: Repository<Address>;

  constructor() {
    this.repository = getRepository(Address);
  }

  async create(data: ICreateAddressDTO): Promise<Address> {
    const add = this.repository.create(data);

    const response = await this.repository.save(add);

    return response;
  }
}
