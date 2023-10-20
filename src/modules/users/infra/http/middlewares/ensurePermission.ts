import { Request, Response, NextFunction } from 'express';

import { Roles } from '@modules/users/authorization/constants';
import AppError from '@shared/errors/AppError';

import UsersRepository from '../../typeorm/repositories/UsersRepository';

export default function Role(roles: Roles[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(request.user.id);

    if (!user) {
      throw new AppError('O usuário informado não existe', 404);
    }

    if (!Object.values(roles).includes(user.role)) {
      throw new AppError(
        'O usuário não tem permissão para realizar esta operação',
        403,
      );
    }

    return next();
  };
}
