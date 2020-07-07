import Household from '../infra/typeorm/entities/Household';
import { getCustomRepository } from 'typeorm';
import HouseholdsRepository from '@modules/households/infra/typeorm/repositories/HouseholdsRepository';
// import AppError from '../errors/AppError';

interface Request {
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

export default class CreatePersonService {
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
  }: Request): Promise<Household> {
    const householdsRepository = getCustomRepository(HouseholdsRepository);

    const household: Household = householdsRepository.create({
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

    // Save to db
    await householdsRepository.save(household);

    // returns to http request
    return household;
  }
}
