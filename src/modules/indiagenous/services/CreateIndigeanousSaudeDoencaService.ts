import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigeanousSaudeDoencaDTO } from '../dtos/ICreateIndigeanousSaudeDoencaDTO';
import { IIndigeanousInterviewRepository } from '../repositories/IIndigeanousInterviewRepository';
import { IIndigeanousSaudeDoencaRepository } from '../repositories/IIndigeanousSaudeDoencaRepository';

@injectable()
export class CreateIndigeanousSaudeDoencaService {
  constructor(
    @inject('IndigeanousSaudeDoencaRepository')
    private indigeanousSaudeDoencaRepository: IIndigeanousSaudeDoencaRepository,

    @inject('IndigeanousInterviewRepository')
    private indigeanousInterviewRepository: IIndigeanousInterviewRepository,
  ) {}

  async execute(data: ICreateIndigeanousSaudeDoencaDTO): Promise<void> {
    const indigeanousInterview = await this.indigeanousInterviewRepository.findById(
      data.entrevista_indigena_id,
    );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    await this.indigeanousSaudeDoencaRepository.create(data);
  }
}
