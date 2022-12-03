import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigenousInterviewDemographyDTO } from '../dtos/ICreateIndigenousInterviewDemographyDTO';
import { IndigenousDemography } from '../infra/typeorm/entities/IndigenousDemography';
import { IIndigenousInterviewDemographyRepository } from '../repositories/IIndigenousInterviewDemographyRepository';
import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';

@injectable()
export class CreateIndigenousInterviewDemographyService {
  constructor(
    @inject('IndigeanousInterviewRepository')
    private indigenousInterviewRepository: IIndigenousInterviewRepository,
    @inject('IndigeanousInterviewDemographyRepository')
    private indigenousInterviewDemographyRepository: IIndigenousInterviewDemographyRepository,
  ) {}

  async execute(
    data: ICreateIndigenousInterviewDemographyDTO,
  ): Promise<IndigenousDemography> {
    const indigeanousInterview = await this.indigenousInterviewRepository.findById(
      data.entrevista_indigena_id,
    );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    const indigeanousInterviewDemography = await this.indigenousInterviewDemographyRepository.create(
      data,
    );

    return indigeanousInterviewDemography;
  }
}
