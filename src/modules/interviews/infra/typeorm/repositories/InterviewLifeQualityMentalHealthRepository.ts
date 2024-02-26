import { Repository, getRepository } from 'typeorm';

import { ICreateInterviewLifeQualityMentalHealthDTO } from '@modules/interviews/dtos/ICreateInterviewLifeQualityMentalHealthDTO';
import { IInterviewLifeQualityMentalHealthRepository } from '@modules/interviews/repositories/IInterviewLifeQualityMentalHealthRepository';

import { InterviewLifeQualityMentalHealth } from '../entities/InterviewLifeQualityMentalHealth';

export class InterviewLifeQualityMentalHealthRepository
  implements IInterviewLifeQualityMentalHealthRepository
{
  private ormRepository: Repository<InterviewLifeQualityMentalHealth>;

  constructor() {
    this.ormRepository = getRepository(InterviewLifeQualityMentalHealth);
  }

  async create(
    data: ICreateInterviewLifeQualityMentalHealthDTO,
  ): Promise<void> {
    const interview = this.ormRepository.create(data);

    await this.ormRepository.save(interview);
  }
}
