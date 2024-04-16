import { inject, injectable } from 'tsyringe';

import { ICreateDiscriminationDTO } from '../dtos/ICreateDiscriminationDTO';
import { Discrimination } from '../infra/typeorm/entities/Discrimination';
import { IDiscriminationRepository } from '../repositories/IDiscriminationRepository';

@injectable()
export class CreateDiscriminationService {
  constructor(
    @inject('DiscriminationRepository')
    private readonly discriminationRepository: IDiscriminationRepository,
  ) {}

  async execute(data: ICreateDiscriminationDTO): Promise<Discrimination> {
    return this.discriminationRepository.create(data);
  }
}
