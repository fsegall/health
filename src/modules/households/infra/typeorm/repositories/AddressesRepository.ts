import { Repository, getRepository } from 'typeorm';

import ICreateAddressDTO from '@modules/households/dtos/ICreateAddressDTO';
import { IAddressesRepository } from '@modules/households/repositories/IAddressesRepository';

import Address from '../entities/Address';

export class AddressesRepository implements IAddressesRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  async create(data: ICreateAddressDTO): Promise<Address> {
    const address = this.ormRepository.create(data);

    await this.ormRepository.save(address);

    return address;
  }
}
