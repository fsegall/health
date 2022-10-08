import { getRepository, Repository } from 'typeorm';

import { IIndigeanousApoioFinanceiroRepository } from '@modules/indiagenous/repositories/IIndigeanousApoioFinanceiroRepository';
import { ICreateIndigeanousApoioFinanceiro } from '@modules/indiagenous/repositories/interfaces/ICreateIndigeanousApoioFinanceiro';

import { IndigeanousApoioFinanceiro } from '../entities/IndigeanousApoioFinanceiro';

export class IndigeanousApoioFinanceiroRepository
  implements IIndigeanousApoioFinanceiroRepository {
  private repository: Repository<IndigeanousApoioFinanceiro>;

  constructor() {
    this.repository = getRepository(IndigeanousApoioFinanceiro);
  }

  async create(data: ICreateIndigeanousApoioFinanceiro): Promise<void> {
    const indigeanousApoioFinanceiro = this.repository.create(data);

    await this.repository.save(indigeanousApoioFinanceiro);
  }
}
