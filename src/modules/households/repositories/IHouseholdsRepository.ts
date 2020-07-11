import Household from '@modules/households/infra/typeorm/entities/Household';
import ICreateHouseholdDTO from '@modules/households/dtos/ICreateHouseholdDTO';
export default interface IHouseholdsRepository {
  create(data: ICreateHouseholdDTO): Promise<Household>;
  findById(household_id: string): Promise<Household | undefined>;
  list(): Promise<Household[]>;
  save(household: Household): Promise<Household>;
  findByPerson(person_id: string): Promise<Household | undefined>;
  delete(household_id: string): Promise<void>;
}
