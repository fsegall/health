import { Roles } from "@modules/users/authorization/constants";
import { NextFunction, Request, Response } from "express";
import UsersRepository from "../../typeorm/repositories/UsersRepository";

export default async function ensurePermission(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(request.user.id);

  if(!user) {
    return response.status(401).json({ message: 'Não autorizado'});
  }

  if(user.role === Roles.VISITOR) {
    return response.status(403).json({ message: 'Usuário não possui permissão para acessar este recurso'});
  }

  return next();
}
