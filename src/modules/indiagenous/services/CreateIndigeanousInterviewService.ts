import { inject, injectable } from 'tsyringe';

import { ICreateIndigeanousInterviewDTO } from '../dtos/ICreateIndigeanousInterviewDTO';
import { IndigeanousInterview } from '../infra/typeorm/entities/IndiagenousInterview';
import { IIndigeanousInterviewRepository } from '../repositories/IIndigeanousInterviewRepository';

@injectable()
export class CreateIndigeanousInterviewService {
  constructor(
    @inject('IndigeanousInterviewRepository')
    private indigeanousInterviewRepository: IIndigeanousInterviewRepository,
  ) {}

  async execute(
    data: ICreateIndigeanousInterviewDTO,
  ): Promise<IndigeanousInterview> {
    return this.indigeanousInterviewRepository.create(data);
  }
}
