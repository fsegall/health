import FamilyMember from '@modules/persons/infra/typeorm/entities/FamilyMember';
import ICreateFamilyMemberDTO from '@modules/persons/dtos/ICreateFamilyMemberDTO';
export default interface IPersonsRepository {
  create(data: ICreateFamilyMemberDTO): Promise<FamilyMember>;
  /* findByDate(date: Date): Promise<FamilyMember | undefined>; */
  findByPerson(person_id: string): Promise<FamilyMember[]>;
}
