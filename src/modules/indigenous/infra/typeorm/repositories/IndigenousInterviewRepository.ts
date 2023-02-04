import { getRepository, IsNull, Not, Repository } from 'typeorm';

import { IListAndCountIndigenousInterviewsDTO } from '@modules/indigenous/dtos/IListAndCountIndigenousInterviewsDTO';
import { IIndigenousInterviewRepository } from '@modules/indigenous/repositories/IIndigenousInterviewRepository';
import { ICreateIndigenousInterview } from '@modules/indigenous/repositories/interfaces/ICreateIndigenousInterview';
import { PaginationStrategy } from '@shared/utils/PaginationStrategy';

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

  async listAndCount({
    page,
    limit,
  }: {
    page: number;
    limit: number;
  }): Promise<IListAndCountIndigenousInterviewsDTO> {
    const paging = new PaginationStrategy({
      limit,
      page,
    });

    const [result, total] = await this.repository.findAndCount({
      take: limit,
      skip: paging.skip,
    });

    const pagination = paging.handlePagination(total);

    return {
      indigenous_interviews: result,
      pagination,
      totalCount: total,
    };
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
