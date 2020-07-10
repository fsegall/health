import Person from '@modules/persons/infra/typeorm/entities/Person';
import ICreatePersonDTO from '@modules/persons/dtos/ICreatePersonDTO';
export default interface IPersonsRepository {
  create(data: ICreatePersonDTO): Promise<Person>;
  findById(person_id: string): Promise<Person | undefined>;
  list(): Promise<Person[]>;
  save(person: Person): Promise<Person>;
  findByUser(id: string): Promise<Person[]>;
  delete(person_id: string): Promise<void>;
}
