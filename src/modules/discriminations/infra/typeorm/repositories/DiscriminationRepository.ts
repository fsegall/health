import { Repository, getRepository } from 'typeorm';

import { ICreateDiscriminationDTO } from '@modules/discriminations/dtos/ICreateDiscriminationDTO';
import { IDiscriminationRepository } from '@modules/discriminations/repositories/IDiscriminationRepository';

import { Discrimination } from '../entities/Discrimination';

export class DiscriminationRepository implements IDiscriminationRepository {
  private repository: Repository<Discrimination>;

  constructor() {
    this.repository = getRepository(Discrimination);
  }

  async create(data: ICreateDiscriminationDTO): Promise<void> {
    const discrimination = this.repository.create(data);

    await this.repository.save(discrimination);
  }
}
