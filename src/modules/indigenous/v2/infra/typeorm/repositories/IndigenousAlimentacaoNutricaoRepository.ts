import { getRepository, Repository } from 'typeorm';

import { IIndigenousAlimentacaoNutricaoRepository } from '@modules/indigenous/v2/repositories/IIndigenousAlimentacaoNutricaoRepository';
import { ICreateIndigenousAlimentacaoNutricao } from '@modules/indigenous/v2/repositories/interfaces/ICreateIndigeanousAlimentacaoNutricao';

import { IndigenousAlimentacaoNutricao } from '../entities/IndigenousAlimentacaoNutricao';

export class IndigenousAlimentacaoNutricaoRepository
  implements IIndigenousAlimentacaoNutricaoRepository
{
  private repository: Repository<IndigenousAlimentacaoNutricao>;

  constructor() {
    this.repository = getRepository(IndigenousAlimentacaoNutricao);
  }

  async create(
    data: ICreateIndigenousAlimentacaoNutricao,
  ): Promise<IndigenousAlimentacaoNutricao> {
    const indigeanousAlimentacao = this.repository.create(data);

    await this.repository.save(indigeanousAlimentacao);

    return indigeanousAlimentacao;
  }
}
