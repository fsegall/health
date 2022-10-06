import { getRepository, Repository } from 'typeorm';

import { IIndigeanousInterviewResidenceRepository } from '@modules/indiagenous/repositories/IIndigeanousInterviewResidenceRepository';
import { ICreateIndigeanousInterviewResidence } from '@modules/indiagenous/repositories/interfaces/ICreateIndigeanousInterviewResidence';

import { IndigeanousResidence } from '../entities/IndigeanousResidence';

export class IndigeanousInterviewResidenceRepository
  implements IIndigeanousInterviewResidenceRepository {
  private repository: Repository<IndigeanousResidence>;

  constructor() {
    this.repository = getRepository(IndigeanousResidence);
  }

  async create(
    data: ICreateIndigeanousInterviewResidence,
  ): Promise<IndigeanousResidence> {
    const indigeanousInterviewResidence = this.repository.create(data);

    await this.repository.save(indigeanousInterviewResidence);

    return indigeanousInterviewResidence;
  }
}
