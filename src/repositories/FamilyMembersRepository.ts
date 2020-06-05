import { EntityRepository, Repository } from 'typeorm';
import FamilyMember from '../models/FamilyMember';

@EntityRepository(FamilyMember)
class FamilyMembersRepository extends Repository<FamilyMember> {
  /*   public async findByAge(date: Date): Promise<FamilyMember | null> {
       const findFamilyMember = await this.findOne({
      where: { date },
    });

    return findFamilyMember || null;
  } */
}

export default FamilyMembersRepository;
