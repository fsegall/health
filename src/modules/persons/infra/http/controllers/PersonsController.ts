// index, show, create, update, delete

import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreatePersonService from '@modules/persons/services/CreatePersonService';

export default class PersonsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      interviewer_id,
      name,
      date_of_birth,
      gender,
      race_color,
      religion,
      marital_status,
      literacy,
      education,
      work_status,
      health_conditions,
    } = request.body;

    const createPerson = container.resolve(CreatePersonService);

    const person = await createPerson.execute({
      interviewer_id,
      name,
      date_of_birth,
      gender,
      race_color,
      religion,
      marital_status,
      literacy,
      education,
      work_status,
      health_conditions,
    });

    return response.status(201).json(person);
  }
}
