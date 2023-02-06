import { inject, injectable } from 'tsyringe';

import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';

@injectable()
export class ListIndigenousInterviewService {
  constructor(
    @inject('IndigeanousInterviewRepository')
    private readonly indigenousInterviewRepository: IIndigenousInterviewRepository,
  ) {}

  async execute(data: { page: number; limit: number; loggedUserId: string }) {
    return this.indigenousInterviewRepository.listAndCount({
      page: data.page,
      limit: data.limit,
      loggedUserId: data.loggedUserId,
    });
  }
}
