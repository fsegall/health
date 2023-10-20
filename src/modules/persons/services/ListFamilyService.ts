import { injectable, inject } from 'tsyringe';

import IFamilyMembersRepository from '@modules/persons/repositories/IFamilyMembersRepository';

import FamilyMember from '../infra/typeorm/entities/FamilyMember';

interface IRequest {
  person_id: string;
}
@injectable()
class ListFamilyService {
  constructor(
    @inject('FamilyMembersRepository')
    private familyMembersRepository: IFamilyMembersRepository,
  ) {}

  public async execute({ person_id }: IRequest): Promise<FamilyMember[]> {
    const family = await this.familyMembersRepository.findByPerson(person_id);
    return family;
  }
}

export default ListFamilyService;
