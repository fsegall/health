import { Router } from 'express';

import InterviewsController from '@modules/interviews/infra/http/controllers/InterviewsController';
import { Roles } from '@modules/users/authorization/constants';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import Role from '@modules/users/infra/http/middlewares/ensurePermission';

import { CreateInterviewLifeQualityViolenceController } from '../controllers/CreateInterviewLifeQualityViolenceController';

const interviewsController = new InterviewsController();

const createInterviewLifeQualityViolenceController =
  new CreateInterviewLifeQualityViolenceController();

const interviewsRouter = Router();

interviewsRouter.use(ensureAuthenticated);

interviewsRouter.get(
  '/',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  interviewsController.list,
);

interviewsRouter.get(
  '/:id',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  interviewsController.listByInterviewer,
);

interviewsRouter.get(
  '/get-one/:interviewId',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  interviewsController.getInterviewById,
);

interviewsRouter.post(
  '/',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  interviewsController.create,
);

interviewsRouter.post(
  '/life-quality/violence',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  createInterviewLifeQualityViolenceController.handle,
);

interviewsRouter.post(
  '/handle-offline-data',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  interviewsController.handleOfflineInterviews,
);

export default interviewsRouter;
