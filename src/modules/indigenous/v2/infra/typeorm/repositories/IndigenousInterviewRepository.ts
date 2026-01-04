import { FindManyOptions, getRepository, In, Repository } from 'typeorm';

import { IListAndCountIndigenousInterviewsDTO } from '@modules/indigenous/v2/dtos/IListAndCountIndigenousInterviewsDTO';
import { IIndigenousInterviewRepository } from '@modules/indigenous/v2/repositories/IIndigenousInterviewRepository';
import { ICreateIndigenousInterview } from '@modules/indigenous/v2/repositories/interfaces/ICreateIndigenousInterview';
import { ListIndigenousInterviewParams } from '@modules/indigenous/v2/repositories/interfaces/IListAndCountIndigenousInterviewParams';
import { Roles } from '@modules/users/authorization/constants';
import User from '@modules/users/infra/typeorm/entities/User';
import Project from '@modules/projects/infra/typeorm/entities/Project';
import { PaginationStrategy } from '@shared/utils/PaginationStrategy';

import { IndigenousInterview } from '../entities/IndigenousInterview';

export class IndigenousInterviewRepository
  implements IIndigenousInterviewRepository
{
  private repository: Repository<IndigenousInterview>;
  private userRepository: Repository<User>;
  private projectRepository: Repository<Project>;
  constructor() {
    this.repository = getRepository(IndigenousInterview);
    this.userRepository = getRepository(User);
    this.projectRepository = getRepository(Project);
  }

  async create(data: ICreateIndigenousInterview): Promise<IndigenousInterview> {
    const indigeanousInterview = this.repository.create(data);

    await this.repository.save(indigeanousInterview);

    return indigeanousInterview;
  }

  async findById(id: string): Promise<IndigenousInterview | undefined> {
    return this.repository.findOne({
      where: { id },
      relations: [
        'entrevistador',
        'project',
        'entrevista_indigena_demografico',
        'entrevista_indigena_domicilio',
        'entrevista_indigena_apoio_financeiro',
      ],
    });
  }

  async listAndCount({
    page,
    limit,
    loggedUserId,
    entrevistador_id,
    projeto_id,
  }: ListIndigenousInterviewParams): Promise<IListAndCountIndigenousInterviewsDTO> {
    const user = await this.userRepository.findOneOrFail({
      where: {
        id: loggedUserId,
      },
    });

    const userIsInterviewer = user?.role === Roles.INTERVIEWER;
    const userIsCoordinator = user?.role === Roles.COORDINATOR;

    let filter = {};

    // Se é INTERVIEWER, só mostra suas próprias entrevistas
    if (userIsInterviewer) {
      filter = {
        ...filter,
        entrevistador_id: user?.id,
      };
    }

    // Se é COORDINATOR, filtra pelos projetos que ele criou
    if (userIsCoordinator) {
      // Busca todos os projetos do coordenador
      const userProjects = await this.projectRepository.find({
        where: { user_id: loggedUserId },
        select: ['id'],
      });
      const projectIds = userProjects.map((p: any) => p.id);

      if (projectIds.length > 0) {
        // Usa o operador In do TypeORM para filtrar por múltiplos IDs
        filter = {
          ...filter,
          project_id: projectIds.length === 1 ? projectIds[0] : In(projectIds),
        } as any;
      } else {
        // Se não tem projetos, retorna array vazio
        const emptyPagination = new PaginationStrategy({ limit, page });
        return {
          indigenous_interviews: [],
          pagination: emptyPagination.handlePagination(0),
          totalCount: 0,
        };
      }
    }

    // Filtros adicionais da query string
    if (entrevistador_id && !userIsInterviewer) {
      filter = {
        ...filter,
        entrevistador_id,
      };
    }

    if (projeto_id) {
      filter = {
        ...filter,
        project_id: projeto_id, // O campo na entidade é 'project_id', não 'projeto_id'
      };
    }

    const filterOptions: FindManyOptions<IndigenousInterview> = {
      where: filter,
      relations: ['entrevistador', 'project'],
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
