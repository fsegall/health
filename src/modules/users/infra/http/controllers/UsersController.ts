// index, show, create, update, delete

import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';
import ShowProfileService from '@modules/users/services/ShowProfileService';
import ListProfilesService from '@modules/users/services/ListProfilesService';
import UpdateProfileService from '@modules/users/services/UpdateProfileService';

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


    return response.json(classToClass(user));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUser = container.resolve(ShowProfileService);

    const user = await showUser.execute({ user_id: id });

    return response.json(classToClass(user));
  }

  public async list(request: Request, response: Response): Promise<Response> {

    const listUsers = container.resolve(ListProfilesService);

    const users = await listUsers.execute();

    const usersResponse = response.json(classToClass(users).map((user) => {
      user.telephone_number = "XXXXXX";
      return user;
    }));

    return usersResponse;
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      user_id,
      name,
      organization_name,
      telephone_number,
      email,
      old_password,
      password,
    } = request.body;
    const updateUser = container.resolve(UpdateProfileService);

    const user = await updateUser.execute({
      user_id,
      name,
      organization_name,
      telephone_number,
      email,
      old_password,
      password,
    });

    return response.json(classToClass(user));
  }
}
