import { injectable, inject } from 'tsyringe';

import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';
import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import AppError from '@shared/errors/AppError';

import ICreateInterviewDTO from '../dtos/ICreateInterviewDTO';
import Interview from '../infra/typeorm/entities/Interview';

@injectable()
export default class CreateInterviewService {
  constructor(
    @inject('InterviewsRepository')
    private interviewsRepository: IInterviewsRepository,
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}
  public async execute(data: ICreateInterviewDTO): Promise<Interview> {
    const projectExists = await this.projectsRepository.findByName(
      data.project_name.toUpperCase(),
    );

    if (!projectExists) {
      throw new AppError('Este projeto não foi cadastrado ainda');
    }

    const projectNumberExists = await this.projectsRepository.findByNumber(
      data.project_number,
    );

    if (!projectNumberExists) {
      throw new AppError('Este número de projeto não foi cadastrado ainda');
    }

    const personAlreadyInterviewed =
      await this.interviewsRepository.findByPersonId(data.person_id);

    if (personAlreadyInterviewed) {
      throw new AppError('Esta pessoa já tem uma entrevista cadastrada');
    }

    const sanitizedData = {
      ...data,
      project_id: projectExists.id,
      project_name: data.project_name.toUpperCase(),
    };

    const interview: Interview = await this.interviewsRepository.create(
      sanitizedData,
    );

    return interview;
  }
}
