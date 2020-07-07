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
}

export default FamilyMemberRepository;
