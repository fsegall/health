import Person from '@modules/persons/infra/typeorm/entities/Person';
import ICreatePersonDTO from '@modules/persons/dtos/ICreatePersonDTO';
export default interface IPersonsRepository {
  create(data: ICreatePersonDTO): Promise<Person>;
  /* findByDate(date: Date): Promise<Person | undefined>; */
}
