import { getRepository, Repository } from 'typeorm';

import { IIndigenousSaudeDoencaRepository } from '@modules/indigenous/v2/repositories/IIndigenousSaudeDoencaRepository';
import { ICreateIndigenousSaudeDoenca } from '@modules/indigenous/v2/repositories/interfaces/ICreateIndigenousSaudeDoenca';

import { IndigeanousSaudeDoenca } from '../entities/IndigenousSaudeDoenca';

export class IndigenousSaudeDoencaRepository
  implements IIndigenousSaudeDoencaRepository
{
  private repository: Repository<IndigeanousSaudeDoenca>;

  constructor() {
    this.repository = getRepository(IndigeanousSaudeDoenca);
  }

  async create(
    data: ICreateIndigenousSaudeDoenca,
  ): Promise<IndigeanousSaudeDoenca> {
    const indigeanousSaudeDoenca = this.repository.create(data);

    await this.repository.save(indigeanousSaudeDoenca);

    return indigeanousSaudeDoenca;
  }
}
