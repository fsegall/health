import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigenousInterviewResidenceDTO } from '../dtos/ICreateIndigenousInterviewResidenceDTO';
import { IndigenousResidence } from '../infra/typeorm/entities/IndigenousResidence';
import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';
import { IIndigenousInterviewResidenceRepository } from '../repositories/IIndigenousInterviewResidenceRepository';

@injectable()
export class CreateIndigenousInterviewResidenceService {
  constructor(
    @inject('IndigeanousInterviewResidenceRepository')
    private indigeanousInterviewResidenceRepository: IIndigenousInterviewResidenceRepository,

    @inject('IndigeanousInterviewRepository')
    private indigeanousInterviewRepository: IIndigenousInterviewRepository,
  ) {}

  async execute(
    data: ICreateIndigenousInterviewResidenceDTO,
  ): Promise<IndigenousResidence> {
    const indigeanousInterview =
      await this.indigeanousInterviewRepository.findById(
        data.entrevista_indigena_id,
      );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    const indigenousResidence =
      await this.indigeanousInterviewResidenceRepository.create({
        ...data,
        veiculos: data.veiculos.toString(),
        destino_lixo_da_residencia: data.destino_lixo_da_residencia,
      });

    return indigenousResidence;
  }
}
