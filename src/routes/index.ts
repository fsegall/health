import { Router } from 'express';
// import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import personsRouter from './persons.routes';
import householdsRouter from './households.routes';
import addressesRouter from './addresses.routes';
import familyMembersRouter from './familyMembers.routes';

const routes = Router();

routes.use('/person', personsRouter);
routes.use('/household', householdsRouter);
routes.use('/address', addressesRouter);
routes.use('/familymember', familyMembersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
