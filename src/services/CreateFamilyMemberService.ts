import FamilyMember from '../models/FamilyMember';
import { getCustomRepository } from 'typeorm';
import FamilyMembersRepository from '../repositories/FamilyMembersRepository';
// import AppError from '../errors/AppError';
// O Service não tem acesso ao Request e Response
interface Request {
  person_id: string;
  gender: string;
  age: number;
}

export default class CreateFamilyMemberService {
  public async execute({
    person_id,
    gender,
    age,
  }: Request): Promise<FamilyMember> {
    const familyMembersRepository = getCustomRepository(
      FamilyMembersRepository,
    );

    const familyMember: FamilyMember = familyMembersRepository.create({
      person_id,
      gender,
      age,
    });

    // Save to db
    await familyMembersRepository.save(familyMember);

    // returns to http request
    return familyMember;
  }
}
