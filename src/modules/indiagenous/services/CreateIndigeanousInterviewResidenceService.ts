import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigeanousInterviewResidenceDTO } from '../dtos/ICreateIndigeanousInterviewResidenceDTO';
import { IndigeanousResidence } from '../infra/typeorm/entities/IndigeanousResidence';
import { IIndigeanousInterviewRepository } from '../repositories/IIndigeanousInterviewRepository';
import { IIndigeanousInterviewResidenceRepository } from '../repositories/IIndigeanousInterviewResidenceRepository';

@injectable()
export class CreateIndigeanousInterviewResidenceService {
  constructor(
    @inject('IndigeanousInterviewResidenceRepository')
    private indigeanousInterviewResidenceRepository: IIndigeanousInterviewResidenceRepository,

    @inject('IndigeanousInterviewRepository')
    private indigeanousInterviewRepository: IIndigeanousInterviewRepository,
  ) {}

  async execute(
    data: ICreateIndigeanousInterviewResidenceDTO,
  ): Promise<IndigeanousResidence> {
    const indigeanousInterview = await this.indigeanousInterviewRepository.findById(
      data.entrevista_indigena_id,
    );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    const indigeanousInterviewResidence = await this.indigeanousInterviewResidenceRepository.create(
      data,
    );

    return indigeanousInterviewResidence;
  }
}
