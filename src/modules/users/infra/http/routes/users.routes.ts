import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import UserController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';
import UserRoleController from '../controllers/UserRoleController';

const userController = new UserController();
const userAvatarController = new UserAvatarController();
const userRoleController = new UserRoleController();

const usersRouter = Router();
const upload = multer(uploadConfig.multer);

usersRouter.get('/', userController.list);
usersRouter.get('/:id', userController.show);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      organization_name: Joi.string(),
      telephone_number: Joi.string().required(),
      password: Joi.string().min(6).required(),
    },
  }),
  userController.create,
);

usersRouter.put('/', userController.update);

// Atualização de uma propriedade apenas
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

usersRouter.patch(
  '/role',
  ensureAuthenticated,
  userRoleController.update,
);

export default usersRouter;
