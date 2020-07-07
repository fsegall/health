import { Router, Request, Response } from 'express';

import CreateFamilyMemberService from '@modules/persons/services/CreateFamilyMemberService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import FamilyMembersController from '@modules/persons/infra/http/controllers/FamilyMembersController';

const familyMembersRouter = Router();

familyMembersRouter.use(ensureAuthenticated);

/* familyMembersRouter.get('/', async (request: Request, response: Response) => {
  console.log(request.user);
  const familyMembersRepository = getCustomRepository(FamilyMembersRepository);
  const familyMember = await familyMembersRepository.find();
  return response.json(familyMember);
}); */

const familyMembersController = new FamilyMembersController();

familyMembersRouter.post('/', familyMembersController.create);

export default familyMembersRouter;
