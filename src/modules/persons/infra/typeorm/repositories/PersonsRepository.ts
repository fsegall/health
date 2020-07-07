import { getRepository, Repository } from 'typeorm';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import ICreatePersonDTO from '@modules/persons/dtos/ICreatePersonDTO';
import Person from '@modules/persons/infra/typeorm/entities/Person';

class PersonsRepository implements IPersonsRepository {
  private ormRepository: Repository<Person>;

  constructor() {
    this.ormRepository = getRepository(Person);
  }

  public async create({
    name,
    date_of_birth,
    interviewer_id,
    education,
    gender,
    health_conditions,
    literacy,
    marital_status,
    race_color,
    religion,
    work_status,
  }: ICreatePersonDTO): Promise<Person> {
    const person = this.ormRepository.create({
      name,
      date_of_birth,
      interviewer_id,
      education,
      gender,
      health_conditions,
      literacy,
      marital_status,
      race_color,
      religion,
      work_status,
    });
    await this.ormRepository.save(person);
    return person;
  }
}

export default PersonsRepository;
