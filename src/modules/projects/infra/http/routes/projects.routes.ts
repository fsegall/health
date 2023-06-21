import { Router } from 'express';

import ProjectsController from '@modules/projects/infra/http/controllers/ProjectsController';
import { Roles } from '@modules/users/authorization/constants';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import Role from '@modules/users/infra/http/middlewares/ensurePermission';

const projectsController = new ProjectsController();

const projectsRouter = Router();

projectsRouter.use(ensureAuthenticated);

projectsRouter.get(
  '/',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  projectsController.list,
);

projectsRouter.post(
  '/',
  Role([Roles.COORDINATOR, Roles.ADMIN]),
  projectsController.create,
);

export default projectsRouter;
