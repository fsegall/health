import { Router } from 'express';

import ProjectsController from '@modules/projects/infra/http/controllers/ProjectsController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const projectsController = new ProjectsController();

const projectsRouter = Router();

projectsRouter.use(ensureAuthenticated);

projectsRouter.post('/', projectsController.create);

export default projectsRouter;
