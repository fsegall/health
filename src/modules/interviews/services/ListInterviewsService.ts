import Interview from '../infra/typeorm/entities/Interview';
import AppError from '@shared/errors/AppError';
import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
class ListInterviewsService {
  constructor(
    @inject('InterviewsRepository')
    private interviewsRepository: IInterviewsRepository,
  ) { }

  public async execute(): Promise<Interview[]> {
    const interviews = await this.interviewsRepository.list();
    return interviews;
  }

  public async findOne(id: string): Promise<Interview> {
    return await this.interviewsRepository.findOne(id)
  }
}

export default ListInterviewsService;
