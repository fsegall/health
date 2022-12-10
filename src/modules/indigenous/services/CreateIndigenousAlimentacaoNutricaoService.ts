import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigenousAlimentacaoNutricaoDTO } from '../dtos/ICreateIndigenousAlimentacaoNutricaoDTO';
import { IndigenousAlimentacaoNutricao } from '../infra/typeorm/entities/IndigenousAlimentacaoNutricao';
import { IIndigenousAlimentacaoNutricaoRepository } from '../repositories/IIndigenousAlimentacaoNutricaoRepository';
import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';

@injectable()
export class CreateIndigenousAlimentacaoNutricaoService {
  constructor(
    @inject('IndigeanousAlimentacaoNutricaoRepository')
    private indigenousAlimentacaoNutricaoRepository: IIndigenousAlimentacaoNutricaoRepository,

    @inject('IndigeanousInterviewRepository')
    private indigenousInterviewRepository: IIndigenousInterviewRepository,
  ) {}

  async execute(
    data: ICreateIndigenousAlimentacaoNutricaoDTO,
  ): Promise<IndigenousAlimentacaoNutricao> {
    const indigeanousInterview = await this.indigenousInterviewRepository.findById(
      data.entrevista_indigena_id,
    );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    const indigenousNutrition = await this.indigenousAlimentacaoNutricaoRepository.create(
      data,
    );

    return indigenousNutrition;
  }
}
