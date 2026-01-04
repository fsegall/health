import { getRepository, In, Repository } from 'typeorm';

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

    // Se é INTERVIEWER, só mostra suas próprias entrevistas
    if (userIsInterviewer) {
      const filter: any = {
        entrevistador_id: user?.id,
      };

      // Filtro adicional de projeto_id se fornecido
      if (projeto_id) {
        filter.project_id = projeto_id;
      }

      const paging = new PaginationStrategy({
        limit,
        page,
      });

      const [result, total] = await this.repository.findAndCount({
        where: filter,
        relations: ['entrevistador', 'project'],
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

    // Se é COORDINATOR, filtra pelos projetos que ele criou
    if (userIsCoordinator) {
      // Busca todos os projetos do coordenador
      const userProjects = await this.projectRepository.find({
        where: { user_id: loggedUserId },
        select: ['id'],
      });
      const projectIds = userProjects.map((p: any) => p.id);

      if (projectIds.length === 0) {
        // Se não tem projetos, retorna array vazio
        const emptyPagination = new PaginationStrategy({ limit, page });
        return {
          indigenous_interviews: [],
          pagination: emptyPagination.handlePagination(0),
          totalCount: 0,
        };
      }

      const filter: any = {};

      // Se foi fornecido um projeto_id específico, verifica se está na lista do coordenador
      if (projeto_id) {
        if (!projectIds.includes(projeto_id)) {
          // Projeto não pertence ao coordenador, retorna vazio
          const emptyPagination = new PaginationStrategy({ limit, page });
          return {
            indigenous_interviews: [],
            pagination: emptyPagination.handlePagination(0),
            totalCount: 0,
          };
        }
        filter.project_id = projeto_id;
      } else {
        // Usa o operador In do TypeORM para filtrar por múltiplos IDs
        const [firstProjectId] = projectIds;
        if (projectIds.length === 1) {
          filter.project_id = firstProjectId;
        } else {
          filter.project_id = In(projectIds);
        }
      }

      // Filtro adicional de entrevistador se fornecido
      if (entrevistador_id) {
        filter.entrevistador_id = entrevistador_id;
      }

      const paging = new PaginationStrategy({
        limit,
        page,
      });

      const [result, total] = await this.repository.findAndCount({
        where: filter,
        relations: ['entrevistador', 'project'],
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

    // Se é ADMIN ou outro role, pode ver todas as entrevistas
    const filter: any = {};

    if (entrevistador_id) {
      filter.entrevistador_id = entrevistador_id;
    }

    if (projeto_id) {
      filter.project_id = projeto_id;
    }

    const paging = new PaginationStrategy({
      limit,
      page,
    });

    const [result, total] = await this.repository.findAndCount({
      where: Object.keys(filter).length > 0 ? filter : undefined,
      relations: ['entrevistador', 'project'],
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
