import { inject, injectable } from 'tsyringe';

import { ICreateViolenceDTO } from '../dtos/ICreateViolenceDTO';
import { Violence } from '../infra/typeorm/entities/Violence';
import { IViolenceRepository } from '../repositories/ICreateViolenceRepository';

@injectable()
export class CreateViolenceService {
  constructor(
    @inject('ViolenceRepository')
    private readonly violenceRepository: IViolenceRepository,
  ) {}

  async execute(data: ICreateViolenceDTO): Promise<Violence> {
    return this.violenceRepository.create(data);
  }
}
