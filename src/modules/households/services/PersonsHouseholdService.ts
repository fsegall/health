import Household from '../infra/typeorm/entities/Household';
// import AppError from '@shared/errors/AppError';
import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import { injectable, inject } from 'tsyringe';
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
