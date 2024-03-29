import { Repository, getRepository } from 'typeorm';

import { ICreateDiscriminationDTO } from '@modules/discriminations/dtos/ICreateDiscriminationDTO';
import { IDiscriminationRepository } from '@modules/discriminations/repositories/IDiscriminationRepository';

import { Discrimination } from '../entities/Discrimination';

export class DiscriminationRepository implements IDiscriminationRepository {
  private repository: Repository<Discrimination>;

  constructor() {
    this.repository = getRepository(Discrimination);
  }

  async create(data: ICreateDiscriminationDTO): Promise<Discrimination> {
    const discrimination = this.repository.create(data);

    const response = await this.repository.save(discrimination);

    return response;
  }
}
