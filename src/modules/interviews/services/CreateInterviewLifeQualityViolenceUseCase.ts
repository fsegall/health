import { inject, injectable } from 'tsyringe';

import { ICreateInterviewLifeQualityViolenceDTO } from '../dtos/ICreateInterviewLifeQualityViolenceDTO';
import { IInterviewsLifeQualityViolenceRepository } from '../repositories/IInterviewsQualityLifeViolenceRepository';

@injectable()
export class CreateInterviewLifeQualityViolenceUseCase {
  constructor(
    @inject('InterviewLifeQualityRepository')
    private readonly interviewLifeQualityViolenceRepository: IInterviewsLifeQualityViolenceRepository,
  ) {}

  async execute(data: ICreateInterviewLifeQualityViolenceDTO): Promise<void> {
    await this.interviewLifeQualityViolenceRepository.create(data);
  }
}
