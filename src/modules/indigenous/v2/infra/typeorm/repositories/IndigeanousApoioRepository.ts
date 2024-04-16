import { getRepository, Repository } from 'typeorm';

import { IIndigenousApoioEProtecaoRepository } from '@modules/indigenous/v2/repositories/IIndigenousApoioEProtecaoRepository';
import { ICreateIndigenousApoioEProtecao } from '@modules/indigenous/v2/repositories/interfaces/ICreateIndigenousApoioEProtecao';

import { IndigenousApoioEProtecao } from '../entities/IndigenousApoioEProtecao';

export class IndigeanousApoioRepository
  implements IIndigenousApoioEProtecaoRepository
{
  private repository: Repository<IndigenousApoioEProtecao>;

  constructor() {
    this.repository = getRepository(IndigenousApoioEProtecao);
  }

  async create(
    data: ICreateIndigenousApoioEProtecao,
  ): Promise<IndigenousApoioEProtecao> {
    const indigeanousApoioFinanceiro = this.repository.create(data);

    const created = await this.repository.save(indigeanousApoioFinanceiro);

    return created;
  }
}
