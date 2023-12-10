import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigenousApoioEProtecaoDTO } from '../dtos/ICreateIndigenousApoioEProtecaoDTO';
import { IndigenousApoioEProtecao } from '../infra/typeorm/entities/IndigenousApoioEProtecao';
import { IIndigenousApoioEProtecaoRepository } from '../repositories/IIndigenousApoioEProtecaoRepository';
import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';

@injectable()
export class CreateIndigenousApoioEProtecaoService {
  constructor(
    @inject('IndigeanousApoioFinanceiroRepository')
    private indigenousApoioEProtecaoRepository: IIndigenousApoioEProtecaoRepository,

    @inject('IndigeanousInterviewRepository')
    private indigenousInterviewRepository: IIndigenousInterviewRepository,
  ) {}

  async execute(
    data: ICreateIndigenousApoioEProtecaoDTO,
  ): Promise<IndigenousApoioEProtecao> {
    const indigeanousInterview = await this.indigenousInterviewRepository.findById(
      data.entrevista_indigena_id,
    );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    const indigenousSupport = await this.indigenousApoioEProtecaoRepository.create(
      data,
    );

    return indigenousSupport;
  }
}
