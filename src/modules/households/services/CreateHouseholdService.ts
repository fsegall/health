import Household from '../infra/typeorm/entities/Household';
import { injectable, inject } from 'tsyringe';
import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  person_id: string;
  household_main_person: boolean;
  relationship_to_main_person: string;
  location_of_residence: string;
  type_of_residence: string;
  number_of_rooms: number;
  number_of_people_household: number;
  family_income: number;
  drinking_water: string;
  bathroom_inside_house: boolean;
  garbage_service: boolean;
}

@injectable()
export default class CreateHouseholdService {
  constructor(
    @inject('HouseholdsRepository')
    private householdsRepository: IHouseholdsRepository,
  ) {}
  public async execute({
    person_id,
    household_main_person,
    relationship_to_main_person,
    location_of_residence,
    type_of_residence,
    number_of_rooms,
    number_of_people_household,
    family_income,
    drinking_water,
    bathroom_inside_house,
    garbage_service,
  }: IRequest): Promise<Household> {
    const hasHousehold = await this.householdsRepository.findByPerson(
      person_id,
    );

    if (hasHousehold) {
      throw new AppError(
        'This person already has a household. Please delete or update it.',
      );
    }
    const household: Household = await this.householdsRepository.create({
      person_id,
      household_main_person,
      relationship_to_main_person,
      location_of_residence,
      type_of_residence,
      number_of_rooms,
      number_of_people_household,
      family_income,
      drinking_water,
      bathroom_inside_house,
      garbage_service,
    });

    await this.householdsRepository.save(household);

    return household;
  }
}
