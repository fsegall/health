// index, show, create, update, delete

import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateFamilyMemberService from '@modules/persons/services/CreateFamilyMemberService';
import ListFamilyService from '@modules/persons/services/ListFamilyService';

export default class FamilyMemberController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { person_id, gender, age } = request.body;

    const createPerson = container.resolve(CreateFamilyMemberService);

    const person = await createPerson.execute({
      person_id,
      gender,
      age,
    });

    return response.status(201).json(person);
  }
  public async list(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listFamily = container.resolve(ListFamilyService);

    const family = await listFamily.execute({ person_id: id });

    return response.json(family);
  }
}
