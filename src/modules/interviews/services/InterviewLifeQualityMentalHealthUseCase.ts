import { inject, injectable } from 'tsyringe';

import { ICreateInterviewLifeQualityMentalHealthDTO } from '../dtos/ICreateInterviewLifeQualityMentalHealthDTO';
import { IInterviewLifeQualityMentalHealthRepository } from '../repositories/IInterviewLifeQualityMentalHealthRepository';

@injectable()
export class InterviewLifeQualityMentalHealthUseCase {
  constructor(
    @inject('InterviewLifeQualityMentalHealthRepository')
    private readonly interviewLifeQualityMentalHealthRepository: IInterviewLifeQualityMentalHealthRepository,
  ) {}

  async execute(
    data: ICreateInterviewLifeQualityMentalHealthDTO,
  ): Promise<void> {
    await this.interviewLifeQualityMentalHealthRepository.create(data);
  }
}
