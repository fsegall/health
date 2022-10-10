import { Router } from 'express';

import InterviewsController from '@modules/interviews/infra/http/controllers/InterviewsController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const interviewsController = new InterviewsController();

const interviewsRouter = Router();

interviewsRouter.use(ensureAuthenticated);

interviewsRouter.get('/', interviewsController.list);

interviewsRouter.get('/:id', interviewsController.listByInterviewer);

interviewsRouter.get('/get-one/:interviewId', interviewsController.getInterviewById);

/* interviewsRouter.get('/:id', interviewsController.show);

interviewsRouter.get('/', interviewsController.list); */

interviewsRouter.post('/', interviewsController.create);

interviewsRouter.post('/handle-offline-data', interviewsController.handleOfflineInterviews);

/* interviewsRouter.put('/', interviewsController.update);

interviewsRouter.delete('/:id', interviewsController.delete); */

export default interviewsRouter;
