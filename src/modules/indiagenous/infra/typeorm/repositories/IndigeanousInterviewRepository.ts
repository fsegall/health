import { getRepository, Repository } from 'typeorm';

import { IIndigeanousInterviewRepository } from '@modules/indiagenous/repositories/IIndigeanousInterviewRepository';
import { ICreateIndigeanousInterview } from '@modules/indiagenous/repositories/interfaces/ICreateIndigeanousInterview';

import { IndigeanousInterview } from '../entities/IndiagenousInterview';

export class IndigeanousInterviewRepository
  implements IIndigeanousInterviewRepository {
  private repository: Repository<IndigeanousInterview>;

  constructor() {
    this.repository = getRepository(IndigeanousInterview);
  }

  async create(
    data: ICreateIndigeanousInterview,
  ): Promise<IndigeanousInterview> {
    const indigeanousInterview = this.repository.create(data);

    await this.repository.save(indigeanousInterview);

    return indigeanousInterview;
  }

  async findById(id: string): Promise<IndigeanousInterview | undefined> {
    return this.repository.findOne(id);
  }
}
