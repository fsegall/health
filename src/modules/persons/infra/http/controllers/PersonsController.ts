// index, show, create, update, delete

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePersonService from '@modules/persons/services/CreatePersonService';
import ListPersonsService from '@modules/persons/services/ListPersonsService';
import UpdatePersonService from '@modules/persons/services/UpdatePersonService';
import ShowPersonService from '@modules/persons/services/ShowPersonService';
import DeletePersonService from '@modules/persons/services/DeletePersonService';
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

  public async list(request: Request, response: Response): Promise<Response> {
    const listPersons = container.resolve(ListPersonsService);
    const persons = await listPersons.execute();
    console.log(persons);
    return response.json(persons);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const {
      interviewer_id,
      person_id,
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
    const updatePerson = container.resolve(UpdatePersonService);
    const person = await updatePerson.execute({
      interviewer_id,
      person_id,
      logged_id: request.user.id,
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
    console.log(person);
    return response.json(person);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showPerson = container.resolve(ShowPersonService);

    const person = await showPerson.execute({ person_id: id });

    return response.json(person);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    console.log(id);
    const deletePerson = container.resolve(DeletePersonService);

    const person = await deletePerson.execute({ person_id: id });

    console.log(person);

    return response.json(person);
  }
}
