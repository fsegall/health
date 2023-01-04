import { getRepository, Repository } from 'typeorm';

import { IIndigenousInterviewResidenceRepository } from '@modules/indigenous/repositories/IIndigenousInterviewResidenceRepository';
import { ICreateIndigenousInterviewResidence } from '@modules/indigenous/repositories/interfaces/ICreateIndigeanousInterviewResidence';

import { IndigenousResidence } from '../entities/IndigenousResidence';

export class IndigeanousInterviewResidenceRepository
  implements IIndigenousInterviewResidenceRepository {
  private repository: Repository<IndigenousResidence>;

  constructor() {
    this.repository = getRepository(IndigenousResidence);
  }

  async create(
    data: ICreateIndigenousInterviewResidence,
  ): Promise<IndigenousResidence> {
    const indigeanousInterviewResidence = this.repository.create(data);

    await this.repository.save(indigeanousInterviewResidence);

    return indigeanousInterviewResidence;
  }
}
