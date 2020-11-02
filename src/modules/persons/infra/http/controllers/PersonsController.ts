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
      literacy,
      education,
      work_status,
      work_shift_reduction,
      covid_diagnose
    } = request.body;

    const createPerson = container.resolve(CreatePersonService);

    const person = await createPerson.execute({
      interviewer_id,
      name,
      date_of_birth,
      gender,
      race_color,
      literacy,
      education,
      work_status,
      work_shift_reduction,
      covid_diagnose
    });

    return response.status(201).json(person);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listPersons = container.resolve(ListPersonsService);
    const persons = await listPersons.execute();

    return response.json(persons);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const {
      person_id,
      interviewer_id,
      name,
      date_of_birth,
      gender,
      race_color,
      literacy,
      education,
      work_status,
      work_shift_reduction,
      covid_diagnose
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
      literacy,
      education,
      work_status,
      work_shift_reduction,
      covid_diagnose
    });

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

    const deletePerson = container.resolve(DeletePersonService);

    const person = await deletePerson.execute({ person_id: id });

    return response.json(person);
  }
}
