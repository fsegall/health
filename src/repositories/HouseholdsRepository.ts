import { EntityRepository, Repository } from 'typeorm';
import Household from '../models/Household';

@EntityRepository(Household)
class HouseholdsRepository extends Repository<Household> {
  /*   public async findBy(date: Date): Promise<Household | null> {
       const findHousehold = await this.findOne({
      where: { date },
    });

    return findHousehold || null;
  } */
}

export default HouseholdsRepository;
