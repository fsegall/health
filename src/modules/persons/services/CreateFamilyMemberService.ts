import { injectable, inject } from 'tsyringe';

import FamilyMember from '@modules/persons/infra/typeorm/entities/FamilyMember';
import IFamilyMembersRepository from '@modules/persons/repositories/IFamilyMembersRepository';
// import AppError from '../errors/AppError';

interface IRequest {
  person_id: string;
  gender: string;
  age: number;
}

@injectable()
export default class CreateFamilyMemberService {
  constructor(
    @inject('FamilyMembersRepository')
    private familyMembersRepository: IFamilyMembersRepository,
  ) {}
  public async execute({
    person_id,
    gender,
    age,
  }: IRequest): Promise<FamilyMember> {
    const person: FamilyMember = await this.familyMembersRepository.create({
      person_id,
      gender,
      age,
    });

    return person;
  }
}
