import { inject, injectable } from 'tsyringe';

import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';
import { ListIndigenousInterviewParams } from '../repositories/interfaces/IListAndCountIndigenousInterviewParams';

@injectable()
export class ListIndigenousInterviewService {
  constructor(
    @inject('IndigeanousInterviewV2Repository')
    private readonly indigenousInterviewRepository: IIndigenousInterviewRepository,
  ) {}

  async execute(data: ListIndigenousInterviewParams) {
    return this.indigenousInterviewRepository.listAndCount({
      page: data.page,
      limit: data.limit,
      loggedUserId: data.loggedUserId,
      entrevistador_id: data?.entrevistador_id,
      projeto_id: data?.projeto_id,
    });
  }
}
