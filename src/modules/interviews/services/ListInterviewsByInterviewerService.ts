import Interview from '../infra/typeorm/entities/Interview';
import AppError from '@shared/errors/AppError';
import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  interviewer_id: string;
}

@injectable()
class ListInterviewsService {
  constructor(
    @inject('InterviewsRepository')
    private interviewsRepository: IInterviewsRepository,
  ) { }

  public async execute({ interviewer_id }: IRequest): Promise<Interview[]> {
    const interviews = await this.interviewsRepository.listByInterviewer(interviewer_id);
    return interviews;
  }
}

export default ListInterviewsService;
