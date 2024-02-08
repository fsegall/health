import Address from '@modules/households/infra/typeorm/entities/Address';

import ICreateAddressDTO from '../dtos/ICreateAddressDTO';

export interface IAddressesRepository {
  create(data: ICreateAddressDTO): Promise<Address>;
}
