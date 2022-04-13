import { Router } from 'express';


import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'


const offlineRouter = Router();

offlineRouter.post(
  '/',
  ensureAuthenticated,
  (req, res) => {
    const interviews = {interviews: req.body.interviews}
    console.log(interviews)
    res.status(200).json(interviews)
  },
);

export default offlineRouter;
