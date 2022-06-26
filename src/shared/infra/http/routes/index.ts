import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import personsRouter from '@modules/persons/infra/http/routes/persons.routes';
import householdsRouter from '@modules/households/infra/http/routes/households.routes';
import addressesRouter from '@modules/households/infra/http/routes/addresses.routes';
import familyMembersRouter from '@modules/persons/infra/http/routes/familyMembers.routes';
import projectsRouter from '@modules/projects/infra/http/routes/projects.routes';
import interviewsRouter from '@modules/interviews/infra/http/routes/interviews.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import offlineRouter from '../offlineRecover'
const routes = Router();

routes.use('/password', passwordRouter);
routes.use('/persons', personsRouter);
routes.use('/households', householdsRouter);
routes.use('/addresses', addressesRouter);
routes.use('/familymembers', familyMembersRouter);
routes.use('/projects', projectsRouter);
routes.use('/interviews', interviewsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/offline', offlineRouter);

export default routes;
