import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigenousSaudeDoencaDTO } from '../dtos/ICreateIndigenousSaudeDoencaDTO';
import { IndigeanousSaudeDoenca } from '../infra/typeorm/entities/IndigenousSaudeDoenca';
import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';
import { IIndigenousSaudeDoencaRepository } from '../repositories/IIndigenousSaudeDoencaRepository';

@injectable()
export class CreateIndigeanousSaudeDoencaService {
  constructor(
    @inject('IndigeanousSaudeDoencaV2Repository')
    private indigeanousSaudeDoencaRepository: IIndigenousSaudeDoencaRepository,

    @inject('IndigeanousInterviewV2Repository')
    private indigeanousInterviewRepository: IIndigenousInterviewRepository,
  ) {}

  async execute(
    data: ICreateIndigenousSaudeDoencaDTO,
  ): Promise<IndigeanousSaudeDoenca> {
    const indigeanousInterview =
      await this.indigeanousInterviewRepository.findById(
        data.entrevista_indigena_id,
      );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    const indigenousSaudeDoenca =
      await this.indigeanousSaudeDoencaRepository.create(data);

    return indigenousSaudeDoenca;
  }
}
