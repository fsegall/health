// index, show, create, update, delete

import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';
import ShowProfileService from '@modules/users/services/ShowProfileService';
import ListProfilesService from '@modules/users/services/ListProfilesService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      organization_name,
      email,
      telephone_number,
      password,
    } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      organization_name,
      email,
      telephone_number,
      password,
    });

    delete user.password;

    return response.json(user);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    console.log(id);

    const showUser = container.resolve(ShowProfileService);

    const user = await showUser.execute({ user_id: id });

    console.log(user);

    return response.json(user);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListProfilesService);

    const users = await listUsers.execute();

    console.log(users);

    return response.json(users);
  }
}
