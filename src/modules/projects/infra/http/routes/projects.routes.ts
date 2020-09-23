import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProjectsController from '@modules/projects/infra/http/controllers/ProjectsController';

const projectsController = new ProjectsController();

const projectsRouter = Router();

projectsRouter.use(ensureAuthenticated);

/* projectsRouter.get('/:id', projectsController.show);

projectsRouter.get('/', projectsController.list); */

projectsRouter.post('/', projectsController.create);

/* projectsRouter.put('/', projectsController.update);

projectsRouter.delete('/:id', projectsController.delete); */



export default projectsRouter;
