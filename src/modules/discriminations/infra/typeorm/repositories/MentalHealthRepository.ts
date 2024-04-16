import { Repository, getRepository } from 'typeorm';

import { ICreateMentalHealthDTO } from '@modules/discriminations/dtos/ICreateMentalHealthDTO';
import { IMentalHealthRepository } from '@modules/discriminations/repositories/ICreateMentalHealthRepository';

import { MentalHealth } from '../entities/MentalHealth';

export class MentalHealthRepository implements IMentalHealthRepository {
  private repository: Repository<MentalHealth>;

  constructor() {
    this.repository = getRepository(MentalHealth);
  }

  async create(data: ICreateMentalHealthDTO): Promise<MentalHealth> {
    const mentalHealth = this.repository.create(data);

    const response = await this.repository.save(mentalHealth);

    return response;
  }
}
