import { inject, injectable } from 'tsyringe';

import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

import { ICreateIndigeanousInterviewDTO } from '../dtos/ICreateIndigeanousInterviewDTO';
import { IndigeanousInterview } from '../infra/typeorm/entities/IndigeanousInterview';
import { IIndigeanousInterviewRepository } from '../repositories/IIndigeanousInterviewRepository';

@injectable()
export class CreateIndigeanousInterviewService {
  constructor(
    @inject('IndigeanousInterviewRepository')
    private indigeanousInterviewRepository: IIndigeanousInterviewRepository,

    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(
    data: ICreateIndigeanousInterviewDTO,
  ): Promise<IndigeanousInterview> {
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

    return this.indigeanousInterviewRepository.create({
      ...data,
      projeto_id: project.id,
    });
  }
}
