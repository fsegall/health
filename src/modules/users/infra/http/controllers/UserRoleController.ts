// index, show, create, update, delete

import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';
import UpdateUserRoleService from '@modules/users/services/UpdateUserRoleService';


export default class UserRoleController {

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      gives_permition_id,
      receives_permition_id,
    } = request.body;

    const updateUserRole = container.resolve(UpdateUserRoleService);

    const user = await updateUserRole.execute({
      gives_permition_id,
      receives_permition_id,
    });

    return response.json(classToClass(user));
  }
}
