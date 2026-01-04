import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import { Roles } from '@modules/users/authorization/constants';
import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';
import { IndigenousInterview } from '../infra/typeorm/entities/IndigenousInterview';

interface IRequest {
  interviewId: string;
  loggedUserId: string;
  loggedUserRole: string;
}

@injectable()
export class GetIndigenousInterviewByIdService {
  constructor(
    @inject('IndigeanousInterviewV2Repository')
    private readonly indigenousInterviewRepository: IIndigenousInterviewRepository,

    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,

    @inject('ProjectsRepository')
    private readonly projectsRepository: IProjectsRepository,
  ) {}

  async execute({ interviewId, loggedUserId, loggedUserRole }: IRequest): Promise<IndigenousInterview> {
    const interview = await this.indigenousInterviewRepository.findById(interviewId);

    if (!interview) {
      throw new AppError('Interview not found', 404);
    }

    // Se o usuário é INTERVIEWER, só pode ver suas próprias entrevistas
    if (loggedUserRole === Roles.INTERVIEWER) {
      if (interview.entrevistador_id !== loggedUserId) {
        throw new AppError('You do not have permission to view this interview', 403);
      }
      return interview;
    }

    // Se o usuário é COORDINATOR, só pode ver entrevistas dos seus projetos
    if (loggedUserRole === Roles.COORDINATOR) {
      const project = await this.projectsRepository.findById(interview.project_id);
      
      if (!project) {
        throw new AppError('Project not found', 404);
      }

      // Coordinator só pode ver entrevistas de projetos que ele criou (project.user_id === loggedUserId)
      if (project.user_id !== loggedUserId) {
        throw new AppError('You do not have permission to view this interview', 403);
      }
      
      return interview;
    }

    // ADMIN pode ver todas as entrevistas
    if (loggedUserRole === Roles.ADMIN) {
      return interview;
    }

    throw new AppError('You do not have permission to view this interview', 403);
  }
}

