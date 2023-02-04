import { inject, injectable } from 'tsyringe';

import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';

@injectable()
export class ListIndigenousInterviewService {
  constructor(
    @inject('IndigeanousInterviewRepository')
    private readonly indigenousInterviewRepository: IIndigenousInterviewRepository,
  ) {}

  async execute(pagination: { page: number; limit: number }) {
    return this.indigenousInterviewRepository.listAndCount({
      page: pagination.page,
      limit: pagination.limit,
    });
  }
}
