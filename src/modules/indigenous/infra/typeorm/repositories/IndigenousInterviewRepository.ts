import { inject } from 'tsyringe';
import { FindManyOptions, getRepository, Repository } from 'typeorm';

import { IListAndCountIndigenousInterviewsDTO } from '@modules/indigenous/dtos/IListAndCountIndigenousInterviewsDTO';
import { IIndigenousInterviewRepository } from '@modules/indigenous/repositories/IIndigenousInterviewRepository';
import { ICreateIndigenousInterview } from '@modules/indigenous/repositories/interfaces/ICreateIndigenousInterview';
import { ListIndigenousInterviewParams } from '@modules/indigenous/repositories/interfaces/IListAndCountIndigenousInterviewParams';
import { Roles } from '@modules/users/authorization/constants';
import User from '@modules/users/infra/typeorm/entities/User';
import UsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import { PaginationStrategy } from '@shared/utils/PaginationStrategy';

import { IndigenousInterview } from '../entities/IndigenousInterview';

export class IndigenousInterviewRepository
  implements IIndigenousInterviewRepository {
  private repository: Repository<IndigenousInterview>;
  private userRepository: Repository<User>;
  constructor() {
    this.repository = getRepository(IndigenousInterview);
    this.userRepository = getRepository(User);
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
    loggedUserId,
    entrevistador_id,
    projeto_id,
  }: ListIndigenousInterviewParams): Promise<
    IListAndCountIndigenousInterviewsDTO
  > {
    const user = await this.userRepository.findOneOrFail({
      where: {
        id: loggedUserId,
      },
    });

    const userIsInterviewer = user?.role === Roles.INTERVIEWER;

    let filter = {};

    if (entrevistador_id) {
      filter = {
        ...filter,
        entrevistador_id,
      };
    }

    if (projeto_id) {
      filter = {
        ...filter,
        projeto_id,
      };
    }

    const filterOptions: FindManyOptions<IndigenousInterview> = userIsInterviewer
      ? {
          where: {
            ...filter,
            entrevistador_id: user?.id,
          },
        }
      : {
          where: {
            ...filter,
          },
        };

    const paging = new PaginationStrategy({
      limit,
      page,
    });

    const [result, total] = await this.repository.findAndCount({
      ...filterOptions,
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
