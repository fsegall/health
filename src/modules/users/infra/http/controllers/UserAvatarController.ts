// index, show, create, update, delete

import { Request, Response } from 'express';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { container } from 'tsyringe';

export default class UsersAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    console.log(request);
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);
    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });
    console.log('update avatar', user);
    delete user.password;
    return response.json(user);
  }
}
