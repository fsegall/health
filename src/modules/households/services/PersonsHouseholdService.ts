import { injectable, inject } from 'tsyringe';

import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';

import Household from '../infra/typeorm/entities/Household';

interface IRequest {
  person_id: string;
}
@injectable()
class PersonsHouseholdService {
  constructor(
    @inject('HouseholdsRepository')
    private householdsRepository: IHouseholdsRepository,
  ) {}

  public async execute({
    person_id,
  }: IRequest): Promise<Household | undefined> {
    const household = await this.householdsRepository.findByPerson(person_id);
    return household;
  }
}

export default PersonsHouseholdService;
