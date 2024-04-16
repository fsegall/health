import { Repository, getRepository } from 'typeorm';

import { ICreateViolenceDTO } from '@modules/discriminations/dtos/ICreateViolenceDTO';
import { IViolenceRepository } from '@modules/discriminations/repositories/ICreateViolenceRepository';

import { Violence } from '../entities/Violence';

export class ViolenceRepository implements IViolenceRepository {
  private repository: Repository<Violence>;

  constructor() {
    this.repository = getRepository(Violence);
  }

  async create(data: ICreateViolenceDTO): Promise<Violence> {
    const violence = this.repository.create(data);

    const response = await this.repository.save(violence);

    return response;
  }
}
