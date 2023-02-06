import { injectable, inject } from 'tsyringe';

import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';

import Interview from '../infra/typeorm/entities/Interview';

@injectable()
class ListInterviewsService {
  constructor(
    @inject('InterviewsRepository')
    private interviewsRepository: IInterviewsRepository,
  ) {}

  public async execute(): Promise<Interview[]> {
    const interviews = await this.interviewsRepository.list();
    return interviews;
  }

  public async findOne(id: string): Promise<Interview> {
    return this.interviewsRepository.findOne(id);
  }
}

export default ListInterviewsService;
