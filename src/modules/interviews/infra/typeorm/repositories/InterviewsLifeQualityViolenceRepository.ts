import { Repository, getRepository } from 'typeorm';

import { ICreateInterviewLifeQualityViolenceDTO } from '@modules/interviews/dtos/ICreateInterviewLifeQualityViolenceDTO';
import { IInterviewsLifeQualityViolenceRepository } from '@modules/interviews/repositories/IInterviewsQualityLifeViolenceRepository';

import { InterviewLifeQualityViolence } from '../entities/InterviewLifeQualityViolence';

export class InterviewsLifeQualityViolenceRepository
  implements IInterviewsLifeQualityViolenceRepository
{
  private ormRepository: Repository<InterviewLifeQualityViolence>;

  constructor() {
    this.ormRepository = getRepository(InterviewLifeQualityViolence);
  }

  async create(data: ICreateInterviewLifeQualityViolenceDTO): Promise<void> {
    const qualityLife = this.ormRepository.create(data);

    await this.ormRepository.save(qualityLife);
  }
}
