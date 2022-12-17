import { inject, injectable } from 'tsyringe';

import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';

@injectable()
export class ListIndigenousInterviewService {
  constructor(
    @inject('IndigeanousInterviewRepository')
    private readonly indigenousInterviewRepository: IIndigenousInterviewRepository,
  ) {}

  async execute() {
    return this.indigenousInterviewRepository.list();
  }
}
