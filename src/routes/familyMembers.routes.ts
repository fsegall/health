import { Router, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import FamilyMembersRepository from '../repositories/FamilyMembersRepository';
import CreateFamilyMemberService from '../services/CreateFamilyMemberService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const familyMembersRouter = Router();

familyMembersRouter.use(ensureAuthenticated);

familyMembersRouter.get('/', async (request: Request, response: Response) => {
  console.log(request.user);
  const familyMembersRepository = getCustomRepository(FamilyMembersRepository);
  const familyMember = await familyMembersRepository.find();
  return response.json(familyMember);
});

familyMembersRouter.post('/', async (request: Request, response: Response) => {
  const { person_id, gender, age } = request.body;

  const createFamilyMember = new CreateFamilyMemberService();

  const familyMember = await createFamilyMember.execute({
    person_id,
    gender,
    age,
  });
  return response.json(familyMember);
});

export default familyMembersRouter;
