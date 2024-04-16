import { inject, injectable } from 'tsyringe';

import { ICreateMentalHealthDTO } from '../dtos/ICreateMentalHealthDTO';
import { MentalHealth } from '../infra/typeorm/entities/MentalHealth';
import { IMentalHealthRepository } from '../repositories/ICreateMentalHealthRepository';

@injectable()
export class CreateMentalHealthService {
  constructor(
    @inject('MentalHealthRepository')
    private readonly mentalHealthRepository: IMentalHealthRepository,
  ) {}

  async execute(data: ICreateMentalHealthDTO): Promise<MentalHealth> {
    return this.mentalHealthRepository.create(data);
  }
}
