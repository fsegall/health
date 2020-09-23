import Interview from '../infra/typeorm/entities/Interview';
import { injectable, inject } from 'tsyringe';
import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';
import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import AppError from '@shared/errors/AppError';
/* import AppError from '@shared/errors/AppError'; */

interface IRequest {
  interviewer_id: string;
  project_name: string;
  person_id: string;
  household_id: string;
  address_id: string;
  is_complete: boolean;
  interview_type: string;
  comments: string;
}

@injectable()
export default class CreateInterviewService {
  constructor(
    @inject('InterviewsRepository')
    private interviewsRepository: IInterviewsRepository,
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) { }
  public async execute({
    interviewer_id,
    project_name,
    person_id,
    household_id,
    address_id,
    is_complete,
    interview_type,
    comments,
  }: IRequest): Promise<Interview> {

    const projectExists = await this.projectsRepository.findByName(project_name);

    if (!projectExists) {
      throw new AppError("Este projeto não foi cadastrado ainda")
    }

    const interview: Interview = await this.interviewsRepository.create({
      interviewer_id,
      project_id: projectExists.id,
      project_name,
      person_id,
      household_id,
      address_id,
      is_complete,
      interview_type,
      comments,
    });

    await this.interviewsRepository.save(interview);

    return interview;
  }
}
