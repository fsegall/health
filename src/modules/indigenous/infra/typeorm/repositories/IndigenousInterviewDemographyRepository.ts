import { getRepository, Repository } from 'typeorm';

import { IIndigenousInterviewDemographyRepository } from '@modules/indigenous/repositories/IIndigenousInterviewDemographyRepository';
import { ICreateIndigenousInterviewDemography } from '@modules/indigenous/repositories/interfaces/ICreateIndigenousInterviewDemography';

import { IndigenousDemography } from '../entities/IndigenousDemography';

export class IndigenousInterviewDemographyRepository
  implements IIndigenousInterviewDemographyRepository {
  private repository: Repository<IndigenousDemography>;

  constructor() {
    this.repository = getRepository(IndigenousDemography);
  }

  async create(
    data: ICreateIndigenousInterviewDemography,
  ): Promise<IndigenousDemography> {
    const indigeanousInterviewDemography = this.repository.create(data);

    await this.repository.save(indigeanousInterviewDemography);

    return indigeanousInterviewDemography;
  }
}
