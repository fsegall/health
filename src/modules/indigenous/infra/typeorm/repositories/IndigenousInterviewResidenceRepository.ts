import { getRepository, Repository } from 'typeorm';

import { IIndigeanousInterviewResidenceRepository } from '@modules/indigenous/repositories/IIndigeanousInterviewResidenceRepository';
import { ICreateIndigeanousInterviewResidence } from '@modules/indigenous/repositories/interfaces/ICreateIndigeanousInterviewResidence';

import { IndigenousResidence } from '../entities/IndigenousResidence';

export class IndigeanousInterviewResidenceRepository
  implements IIndigeanousInterviewResidenceRepository {
  private repository: Repository<IndigenousResidence>;

  constructor() {
    this.repository = getRepository(IndigenousResidence);
  }

  async create(
    data: ICreateIndigeanousInterviewResidence,
  ): Promise<IndigenousResidence> {
    const indigeanousInterviewResidence = this.repository.create(data);

    await this.repository.save(indigeanousInterviewResidence);

    return indigeanousInterviewResidence;
  }
}
