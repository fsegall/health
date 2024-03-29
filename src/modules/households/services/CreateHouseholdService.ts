import { injectable, inject } from 'tsyringe';

import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import AppError from '@shared/errors/AppError';

import ICreateHouseholdDTO from '../dtos/ICreateHouseholdDTO';
import Household from '../infra/typeorm/entities/Household';

@injectable()
export default class CreateHouseholdService {
  constructor(
    @inject('HouseholdsRepository')
    private householdsRepository: IHouseholdsRepository,
  ) {}
  public async execute(data: ICreateHouseholdDTO): Promise<Household> {
    const hasHousehold = await this.householdsRepository.findByPerson(
      data.person_id,
    );

    if (hasHousehold) {
      throw new AppError(
        'This person already has a household. Please delete or update it.',
      );
    }
    const household: Household = await this.householdsRepository.create(data);

    await this.householdsRepository.save(household);

    return household;
  }
}
