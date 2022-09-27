import { getRepository, Repository } from 'typeorm';

import { ICreateIndigeanousInterviewDTO } from '@modules/indiagenous/dtos/ICreateIndigeanousInterviewDTO';
import { IIndigeanousInterviewRepository } from '@modules/indiagenous/repositories/IIndigeanousInterviewRepository';

import { IndigeanousInterview } from '../entities/IndiagenousInterview';

export class IndigeanousInterviewRepository
  implements IIndigeanousInterviewRepository {
  private repository: Repository<IndigeanousInterview>;

  constructor() {
    this.repository = getRepository(IndigeanousInterview);
  }

  async create(
    data: ICreateIndigeanousInterviewDTO,
  ): Promise<IndigeanousInterview> {
    const indigeanousInterview = this.repository.create(data);

    await this.repository.save(indigeanousInterview);

    return indigeanousInterview;
  }

  async findById(id: string): Promise<IndigeanousInterview | undefined> {
    return this.repository.findOne(id);
  }
}
