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
  public async execute({
    interviewer_id,
    project_name,
    project_number,
    person_id,
    household_id,
    address_id,
    is_complete,
    is_complete_with_errors,
    interview_type,
    comments,
  }: ICreateInterviewDTO): Promise<Interview> {
    const projectExists = await this.projectsRepository.findByName(
      project_name.toUpperCase(),
    );

    if (!projectExists) {
      throw new AppError('Este projeto não foi cadastrado ainda');
    }

    const projectNumberExists = await this.projectsRepository.findByNumber(
      project_number,
    );

    if (!projectNumberExists) {
      throw new AppError('Este número de projeto não foi cadastrado ainda');
    }

    const personAlreadyInterviewed = await this.interviewsRepository.findByPersonId(
      person_id,
    );

    if (personAlreadyInterviewed) {
      throw new AppError('Esta pessoa já tem uma entrevista cadastrada');
    }

    const interview: Interview = await this.interviewsRepository.create({
      interviewer_id,
      project_id: projectExists.id,
      project_name: project_name.toUpperCase(),
      project_number,
      person_id,
      household_id,
      address_id,
      is_complete,
      is_complete_with_errors,
      interview_type,
      comments,
    });

    await this.interviewsRepository.save(interview);

    return interview;
  }
}
