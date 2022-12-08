import { inject, injectable } from 'tsyringe';

import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

import { ICreateIndigenousInterviewDTO } from '../dtos/ICreateIndigenousInterviewDTO';
import { IndigenousInterview } from '../infra/typeorm/entities/IndigenousInterview';
import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';

@injectable()
export class CreateIndigenousInterviewService {
  constructor(
    @inject('IndigeanousInterviewRepository')
    private indigenousInterviewRepository: IIndigenousInterviewRepository,

    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(
    data: ICreateIndigenousInterviewDTO,
  ): Promise<IndigenousInterview> {
    const project = await this.projectsRepository.findByNumber(
      data.numero_projeto,
    );

    const interviewer = await this.usersRepository.findById(
      data.entrevistador_id,
    );

    if (!interviewer) {
      throw new AppError('Interviewer not found', 404);
    }

    if (!project) {
      throw new AppError('Project not found', 404);
    }

    if (interviewer.id !== project.user_id) {
      throw new AppError('Interviewer does not have access to project', 403);
    }

    const indigenousInterview = await this.indigenousInterviewRepository.create(
      {
        ...data,
        projeto_id: project.id,
      },
    );

    return indigenousInterview;
  }
}
