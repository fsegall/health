import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigenousInterviewDemographyDTO } from '../dtos/ICreateIndigenousInterviewDemographyDTO';
import { IndigenousDemography } from '../infra/typeorm/entities/IndigenousDemography';
import { IIndigenousInterviewDemographyRepository } from '../repositories/IIndigenousInterviewDemographyRepository';
import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';
import { ICreateIndigenousInterviewDemography } from '../repositories/interfaces/ICreateIndigenousInterviewDemography';

@injectable()
export class CreateIndigenousInterviewDemographyService {
  constructor(
    @inject('IndigeanousInterviewV2Repository')
    private indigenousInterviewRepository: IIndigenousInterviewRepository,
    @inject('IndigeanousInterviewDemographyV2Repository')
    private indigenousInterviewDemographyRepository: IIndigenousInterviewDemographyRepository,
  ) {}

  async execute(
    data: ICreateIndigenousInterviewDemographyDTO,
  ): Promise<IndigenousDemography> {
    const indigeanousInterview =
      await this.indigenousInterviewRepository.findById(
        data.entrevista_indigena_id,
      );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    let quantidade_morador_nao_indigena = 0;
    if (data.quantidade_morador_nao_indigena !== '') {
      quantidade_morador_nao_indigena = Number(
        data.quantidade_morador_nao_indigena,
      );
    }

    const createData: ICreateIndigenousInterviewDemography = {
      ...data,
      quantidade_morador_nao_indigena,
    };

    const indigeanousInterviewDemography =
      await this.indigenousInterviewDemographyRepository.create(createData);

    return indigeanousInterviewDemography;
  }
}
