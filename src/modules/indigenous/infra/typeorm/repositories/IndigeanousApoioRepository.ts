import { getRepository, Repository } from 'typeorm';

import { IIndigenousApoioEProtecaoRepository } from '@modules/indigenous/repositories/IIndigenousApoioEProtecaoRepository';
import { ICreateIndigenousApoioEProtecao } from '@modules/indigenous/repositories/interfaces/ICreateIndigenousApoioEProtecao';

import { IndigenousApoioEProtecao } from '../entities/IndigenousApoioEProtecao';

export class IndigeanousApoioRepository
  implements IIndigenousApoioEProtecaoRepository {
  private repository: Repository<IndigenousApoioEProtecao>;

  constructor() {
    this.repository = getRepository(IndigenousApoioEProtecao);
  }

  async create(
    data: ICreateIndigenousApoioEProtecao,
  ): Promise<IndigenousApoioEProtecao> {
    const indigeanousApoioFinanceiro = this.repository.create(data);

    await this.repository.save(indigeanousApoioFinanceiro);

    return indigeanousApoioFinanceiro;
  }
}
