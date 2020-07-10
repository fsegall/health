import { getRepository, Repository } from 'typeorm';
import IFamilyMemberRepository from '@modules/persons/repositories/IFamilyMembersRepository';
import ICreateFamilyMemberDTO from '@modules/persons/dtos/ICreateFamilyMemberDTO';
import FamilyMember from '@modules/persons/infra/typeorm/entities/FamilyMember';

class FamilyMemberRepository implements IFamilyMemberRepository {
  private ormRepository: Repository<FamilyMember>;

  constructor() {
    this.ormRepository = getRepository(FamilyMember);
  }

  public async create({
    person_id,
    age,
    gender,
  }: ICreateFamilyMemberDTO): Promise<FamilyMember> {
    const person = this.ormRepository.create({
      person_id,
      age,
      gender,
    });
    await this.ormRepository.save(person);
    return person;
  }
  public async findByPerson(person_id: string): Promise<FamilyMember[]> {
    const family = await this.ormRepository
      .createQueryBuilder('family')
      .where('family.person_id = :id', { id: person_id })
      .getMany();

    return family;
  }
}

export default FamilyMemberRepository;
