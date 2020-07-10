import FamilyMember from '../infra/typeorm/entities/FamilyMember';
import AppError from '@shared/errors/AppError';
import IFamilyMembersRepository from '@modules/persons/repositories/IFamilyMembersRepository';
import { injectable, inject } from 'tsyringe';
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
