import { injectable, inject } from 'tsyringe';

import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';

import Interview from '../infra/typeorm/entities/Interview';

interface IRequest {
  interviewer_id: string;
}

@injectable()
class ListInterviewsService {
  constructor(
    @inject('InterviewsRepository')
    private interviewsRepository: IInterviewsRepository,
  ) {}

  public async execute({ interviewer_id }: IRequest): Promise<Interview[]> {
    const interviews = await this.interviewsRepository.listByInterviewer(
      interviewer_id,
    );
    return interviews;
  }
}

export default ListInterviewsService;
