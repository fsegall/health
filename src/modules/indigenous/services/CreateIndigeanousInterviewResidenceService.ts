import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigeanousInterviewResidenceDTO } from '../dtos/ICreateIndigeanousInterviewResidenceDTO';
import { IndigeanousResidence } from '../infra/typeorm/entities/IndigeanousResidence';
import { IIndigeanousInterviewResidenceRepository } from '../repositories/IIndigeanousInterviewResidenceRepository';
import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';

@injectable()
export class CreateIndigeanousInterviewResidenceService {
  constructor(
    @inject('IndigeanousInterviewResidenceRepository')
    private indigeanousInterviewResidenceRepository: IIndigeanousInterviewResidenceRepository,

    @inject('IndigeanousInterviewRepository')
    private indigeanousInterviewRepository: IIndigenousInterviewRepository,
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

    const indigenousResidence = await this.indigeanousInterviewResidenceRepository.create(
      {
        ...data,
        veiculos: data.veiculos.toString(),
        destino_lixo_da_residencia: data.destino_lixo_da_residencia.toString(),
      },
    );

    return indigenousResidence;
  }
}
