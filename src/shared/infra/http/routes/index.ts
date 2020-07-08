import { Router } from 'express';
// import appointmentsRouter from './appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import personsRouter from '@modules/persons/infra/http/routes/persons.routes';
import householdsRouter from '@modules/households/infra/http/routes/households.routes';
import addressesRouter from '@modules/households/infra/http/routes/addresses.routes';
import familyMembersRouter from '@modules/persons/infra/http/routes/familyMembers.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';

const routes = Router();

routes.use('/password', passwordRouter);
routes.use('/person', personsRouter);
routes.use('/household', householdsRouter);
routes.use('/address', addressesRouter);
routes.use('/familymember', familyMembersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
