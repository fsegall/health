import { getRepository, Repository } from 'typeorm';

import { IIndigeanousInterviewDemographyRepository } from '@modules/indiagenous/repositories/IIndigeanousInterviewDemographyRepository';
import { ICreateIndigeanousInterviewDemography } from '@modules/indiagenous/repositories/interfaces/ICreateIndigeanousInterviewDemography';

import { IndigeanousDemography } from '../entities/IndiagenousDemography';

export class IndigeanousInterviewDemographyRepository
  implements IIndigeanousInterviewDemographyRepository {
  private repository: Repository<IndigeanousDemography>;

  constructor() {
    this.repository = getRepository(IndigeanousDemography);
  }

  async create(
    data: ICreateIndigeanousInterviewDemography,
  ): Promise<IndigeanousDemography> {
    const indigeanousInterviewDemography = this.repository.create(data);

    await this.repository.save(indigeanousInterviewDemography);

    return indigeanousInterviewDemography;
  }
}
