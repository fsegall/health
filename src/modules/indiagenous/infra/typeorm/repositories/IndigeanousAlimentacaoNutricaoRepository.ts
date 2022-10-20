import { getRepository, Repository } from 'typeorm';

import { IIndigeanousAlimentacaoNutricaoRepository } from '@modules/indiagenous/repositories/IIndigeanousAlimentacaoNutricaoRepository';
import { ICreateIndigeanousAlimentacaoNutricao } from '@modules/indiagenous/repositories/interfaces/ICreateIndigeanousAlimentacaoNutricao';

import { IndigeanousAlimentacaoNutricao } from '../entities/IndigeanousAlimentacaoNutricao';

export class IndigeanousAlimentacaoNutricaoRepository
  implements IIndigeanousAlimentacaoNutricaoRepository
{
  private repository: Repository<IndigeanousAlimentacaoNutricao>;

  constructor() {
    this.repository = getRepository(IndigeanousAlimentacaoNutricao);
  }

  async create(
    data: ICreateIndigeanousAlimentacaoNutricao,
  ): Promise<IndigeanousAlimentacaoNutricao> {
    const indigeanousAlimentacao = this.repository.create(data);

    await this.repository.save(indigeanousAlimentacao);

    return indigeanousAlimentacao;
  }
}
