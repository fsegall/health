import { injectable, inject } from 'tsyringe';

import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';

import Household from '../infra/typeorm/entities/Household';

@injectable()
class ListHouseholdsService {
  constructor(
    @inject('HouseholdsRepository')
    private HouseholdsRepository: IHouseholdsRepository,
  ) {}

  public async execute(): Promise<Household[]> {
    const households = await this.HouseholdsRepository.list();
    return households;
  }
}

export default ListHouseholdsService;
