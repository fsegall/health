import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigeanousInterviewDemographyDTO } from '../dtos/ICreateIndigeanousInterviewDemographyDTO';
import { IndigeanousDemography } from '../infra/typeorm/entities/IndiagenousDemography';
import { IIndigeanousInterviewDemographyRepository } from '../repositories/IIndigeanousInterviewDemographyRepository';
import { IIndigeanousInterviewRepository } from '../repositories/IIndigeanousInterviewRepository';

@injectable()
export class CreateIndigeanousInterviewDemographyService {
  constructor(
    @inject('IndigeanousInterviewRepository')
    private indigeanousInterviewRepository: IIndigeanousInterviewRepository,
    @inject('IndigeanousInterviewDemographyRepository')
    private indigeanousInterviewDemographyRepository: IIndigeanousInterviewDemographyRepository,
  ) {}

  async execute(
    data: ICreateIndigeanousInterviewDemographyDTO,
  ): Promise<IndigeanousDemography> {
    const indigeanousInterview =
      await this.indigeanousInterviewRepository.findById(
        data.entrevista_indigena_id,
      );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    const indigeanousInterviewDemography =
      await this.indigeanousInterviewDemographyRepository.create(data);

    return indigeanousInterviewDemography;
  }
}
