import { Request, Response, NextFunction } from 'express';

import { Roles } from '@modules/users/authorization/constants';
import AppError from '@shared/errors/AppError';

import UsersRepository from '../../typeorm/repositories/UsersRepository';

export default async function ensurePermission(
  request: Request,
  _response: Response,
  next: NextFunction,
) {
  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(request.user.id);

  if (user?.role === Roles.VISITOR) {
    throw new AppError(
      'O usuário não tem permissão para realizar esta operação',
      403,
    );
  }

  return next();
}
