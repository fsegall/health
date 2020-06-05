import { Router } from 'express';
// import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import personsRouter from './persons.routes';
/* import householdsRouter from './sessions.routes';
import familymemberRouter from './sessions.routes';
import addressRouter from './sessions.routes'; */
const routes = Router();

/* routes.use('/appointments', appointmentsRouter); */
routes.use('/person', personsRouter);
/* routes.use('/household', householdsRouter);
routes.use('/familymember', familymemberRouter);
routes.use('/address', addressRouter); */
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
