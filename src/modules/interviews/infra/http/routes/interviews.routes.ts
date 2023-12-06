import { Router } from 'express';

import InterviewsController from '@modules/interviews/infra/http/controllers/InterviewsController';
import { Roles } from '@modules/users/authorization/constants';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import Role from '@modules/users/infra/http/middlewares/ensurePermission';

import { InterviewLifeQualityMentalHealthController } from '../controllers/InterviewLifeQualityMentalHealthController';

const interviewsController = new InterviewsController();
const interviewLifeQualityMentalHealthController =
  new InterviewLifeQualityMentalHealthController();

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
  '/life-quality/mental-health',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  interviewLifeQualityMentalHealthController.handle,
);

interviewsRouter.post(
  '/handle-offline-data',
  Role([Roles.COORDINATOR, Roles.INTERVIEWER, Roles.ADMIN]),
  interviewsController.handleOfflineInterviews,
);

export default interviewsRouter;
