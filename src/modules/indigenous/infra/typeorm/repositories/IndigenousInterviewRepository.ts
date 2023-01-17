import { getRepository, Repository } from 'typeorm';

import { IIndigenousInterviewRepository } from '@modules/indigenous/repositories/IIndigenousInterviewRepository';
import { ICreateIndigenousInterview } from '@modules/indigenous/repositories/interfaces/ICreateIndigenousInterview';

import { IndigenousInterview } from '../entities/IndigenousInterview';

export class IndigenousInterviewRepository
  implements IIndigenousInterviewRepository {
  private repository: Repository<IndigenousInterview>;

  constructor() {
    this.repository = getRepository(IndigenousInterview);
  }

  async create(data: ICreateIndigenousInterview): Promise<IndigenousInterview> {
    const indigeanousInterview = this.repository.create(data);

    await this.repository.save(indigeanousInterview);

    return indigeanousInterview;
  }

  async findById(id: string): Promise<IndigenousInterview | undefined> {
    return this.repository.findOne(id);
  }

  async list(): Promise<IndigenousInterview[]> {
    return this.repository.find();
  }

  async findByInterviewDateAndInterviewer(
    date: Date,
    interviewerId: string,
  ): Promise<IndigenousInterview | undefined> {
    return this.repository.findOne({
      where: { data_entrevista: date, entrevistador_id: interviewerId },
    });
  }
}
