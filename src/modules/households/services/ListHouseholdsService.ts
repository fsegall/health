import Household from '../infra/typeorm/entities/Household';
// import AppError from '@shared/errors/AppError';
import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import { injectable, inject } from 'tsyringe';

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
