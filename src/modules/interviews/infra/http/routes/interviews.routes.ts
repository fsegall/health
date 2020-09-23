import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import InterviewsController from '@modules/interviews/infra/http/controllers/InterviewsController';

const interviewsController = new InterviewsController();

const interviewsRouter = Router();

interviewsRouter.use(ensureAuthenticated);

/* interviewsRouter.get('/:id', interviewsController.show);

interviewsRouter.get('/', interviewsController.list); */

interviewsRouter.post('/', interviewsController.create);

/* interviewsRouter.put('/', interviewsController.update);

interviewsRouter.delete('/:id', interviewsController.delete); */



export default interviewsRouter;
