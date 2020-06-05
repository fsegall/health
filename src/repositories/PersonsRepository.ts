import { EntityRepository, Repository } from 'typeorm';
import Person from '../models/Person';

@EntityRepository(Person)
class PersonsRepository extends Repository<Person> {
  /*   public async findByAge(date: Date): Promise<Person | null> {
    const findPerson = await this.findOne({
      where: { date },
    });

    return findPerson || null;
  } */
}

export default PersonsRepository;
