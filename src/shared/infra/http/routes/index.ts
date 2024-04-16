import { Router } from 'express';

import { discriminationRouter } from '@modules/discriminations/infra/http/routes/discrimination.routes';
import { mentalHealthRouter } from '@modules/discriminations/infra/http/routes/mentalHealth.routes';
import { violenceRouter } from '@modules/discriminations/infra/http/routes/violence.routes';
import addressesRouter from '@modules/households/infra/http/routes/addresses.routes';
import householdsRouter from '@modules/households/infra/http/routes/households.routes';
import { indigeanousInterviewRouter } from '@modules/indigenous/v1/infra/http/routes/indigeanousInterview.routes';
import { indigeanousInterviewRouter as indigeanousInterviewRouterV2 } from '@modules/indigenous/v2/infra/http/routes/indigeanousInterview.routes';
import interviewsRouter from '@modules/interviews/infra/http/routes/interviews.routes';
import familyMembersRouter from '@modules/persons/infra/http/routes/familyMembers.routes';
import personsRouter from '@modules/persons/infra/http/routes/persons.routes';
import projectsRouter from '@modules/projects/infra/http/routes/projects.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

import offlineRouter from '../offlineRecover';

const routes = Router();

routes.use('/password', passwordRouter);
routes.use('/persons', personsRouter);
routes.use('/households', householdsRouter);
routes.use('/discrimination', discriminationRouter);
routes.use('/violence', violenceRouter);
routes.use('/mental_health', mentalHealthRouter);
routes.use('/addresses', addressesRouter);
routes.use('/familymembers', familyMembersRouter);
routes.use('/projects', projectsRouter);
routes.use('/interviews', interviewsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/offline', offlineRouter);
routes.use('/indigenous-interviews', indigeanousInterviewRouter);
routes.use('/indigenous-interviews/v2', indigeanousInterviewRouterV2);

export default routes;
