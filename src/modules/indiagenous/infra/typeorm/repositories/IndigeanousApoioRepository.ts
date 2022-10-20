import { getRepository, Repository } from 'typeorm';

import { IIndigeanousApoioRepository } from '@modules/indiagenous/repositories/IIndigeanousApoioRepository';
import { ICreateIndigeanousApoio } from '@modules/indiagenous/repositories/interfaces/ICreateIndigeanousApoio';

import { IndigeanousApoio } from '../entities/IndigeanousApoio';

export class IndigeanousApoioRepository implements IIndigeanousApoioRepository {
  private repository: Repository<IndigeanousApoio>;

  constructor() {
    this.repository = getRepository(IndigeanousApoio);
  }

  async create(data: ICreateIndigeanousApoio): Promise<IndigeanousApoio> {
    const indigeanousApoioFinanceiro = this.repository.create(data);

    await this.repository.save(indigeanousApoioFinanceiro);

    return indigeanousApoioFinanceiro;
  }
}
