import { getRepository, Repository } from 'typeorm';

import { IIndigenousInterviewDemographyRepository } from '@modules/indigenous/v2/repositories/IIndigenousInterviewDemographyRepository';
import { ICreateIndigenousInterviewDemography } from '@modules/indigenous/v2/repositories/interfaces/ICreateIndigenousInterviewDemography';

import { IndigenousDemography } from '../entities/IndigenousDemography';

export class IndigenousInterviewDemographyRepository
  implements IIndigenousInterviewDemographyRepository
{
  private repository: Repository<IndigenousDemography>;

  constructor() {
    this.repository = getRepository(IndigenousDemography);
  }

  async create(
    data: ICreateIndigenousInterviewDemography,
  ): Promise<IndigenousDemography> {
    const indigeanousInterviewDemography = this.repository.create(data);

    const created = await this.repository.save(indigeanousInterviewDemography);

    return created;
  }
}
