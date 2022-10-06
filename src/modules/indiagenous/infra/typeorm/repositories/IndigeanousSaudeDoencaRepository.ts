import { getRepository, Repository } from 'typeorm';

import { IIndigeanousSaudeDoencaRepository } from '@modules/indiagenous/repositories/IIndigeanousSaudeDoencaRepository';
import { ICreateIndigeanousSaudeDoenca } from '@modules/indiagenous/repositories/interfaces/ICreateIndigenousSaudeDoenca';

import { IndigeanousSaudeDoenca } from '../entities/IndigeanousSaudeDoenca';

export class IndigeanousSaudeDoencaRepository
  implements IIndigeanousSaudeDoencaRepository {
  private repository: Repository<IndigeanousSaudeDoenca>;

  constructor() {
    this.repository = getRepository(IndigeanousSaudeDoenca);
  }

  async create(
    data: ICreateIndigeanousSaudeDoenca,
  ): Promise<IndigeanousSaudeDoenca> {
    const indigeanousSaudeDoenca = this.repository.create(data);

    await this.repository.save(indigeanousSaudeDoenca);

    return indigeanousSaudeDoenca;
  }
}
