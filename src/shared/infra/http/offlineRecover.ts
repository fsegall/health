import { Router } from 'express';
import fs from 'fs';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const offlineRouter = Router();

offlineRouter.post(
  '/',
  ensureAuthenticated,
  (req, res) => {
    const interviews = {interviews: req.body.interviews}
    console.log(interviews)
    fs.writeFileSync('./martha.json', JSON.stringify(req.body.interviews), 'utf8' );
    res.status(200).json(interviews)
  },
);

export default offlineRouter;
