import { inject, injectable } from 'tsyringe';

import { ICreateDiscriminationDTO } from '../dtos/ICreateDiscriminationDTO';
import { IDiscriminationRepository } from '../repositories/IDiscriminationRepository';

@injectable()
export class CreateDiscriminationService {
  constructor(
    @inject('DiscriminationRepository')
    private readonly discriminationRepository: IDiscriminationRepository,
  ) {}

  async execute(data: ICreateDiscriminationDTO): Promise<void> {
    return this.discriminationRepository.create(data);
  }
}
