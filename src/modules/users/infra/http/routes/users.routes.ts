import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import UserController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

const userController = new UserController();
const userAvatarController = new UserAvatarController();

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.get('/', userController.list);
usersRouter.get('/:id', userController.show);
usersRouter.post('/', userController.create);
usersRouter.put('/', userController.update);

// Atualização de uma propriedade apenas
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
