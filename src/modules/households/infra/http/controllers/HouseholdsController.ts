// index, show, create, update, delete

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateHouseholdService from '@modules/households/services/CreateHouseholdService';
import ListHouseholdsService from '@modules/households/services/ListHouseholdsService';
import PersonsHouseholdService from '@modules/households/services/PersonsHouseholdService';
// import UpdateHouseholdService from '@modules/households/services/UpdateHouseholdService';
// import ShowHouseholdService from '@modules/households/services/ShowHouseholdService';
// import DeleteHouseholdService from '@modules/households/services/DeleteHouseholdService';

export default class HouseholdsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      person_id,
      household_main_person,
      relationship_to_main_person,
      location_of_residence,
      type_of_residence,
      number_of_rooms,
      number_of_people_household,
      family_income,
      drinking_water,
      bathroom_inside_house,
      garbage_service,
    } = request.body;

    const createHousehold = container.resolve(CreateHouseholdService);

    const household = await createHousehold.execute({
      person_id,
      household_main_person,
      relationship_to_main_person,
      location_of_residence,
      type_of_residence,
      number_of_rooms,
      number_of_people_household,
      family_income,
      drinking_water,
      bathroom_inside_house,
      garbage_service,
    });

    return response.status(201).json(household);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listHouseholds = container.resolve(ListHouseholdsService);
    const households = await listHouseholds.execute();
    return response.json(households);
  }

  // public async update(request: Request, response: Response): Promise<Response> {
  //   const {
  //     interviewer_id,
  //     person_id,
  //     name,
  //     date_of_birth,
  //     gender,
  //     race_color,
  //     religion,
  //     marital_status,
  //     literacy,
  //     education,
  //     work_status,
  //     health_conditions,
  //   } = request.body;
  //   const updatePerson = container.resolve(UpdatePersonService);
  //   const person = await updatePerson.execute({
  //     interviewer_id,
  //     person_id,
  //     logged_id: request.user.id,
  //     name,
  //     date_of_birth,
  //     gender,
  //     race_color,
  //     religion,
  //     marital_status,
  //     literacy,
  //     education,
  //     work_status,
  //     health_conditions,
  //   });

  //   return response.json(person);
  // }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showHousehold = container.resolve(PersonsHouseholdService);

    const household = await showHousehold.execute({ person_id: id });

    return response.json(household);
  }

  // public async delete(request: Request, response: Response): Promise<Response> {
  //   const { id } = request.params;

  //   const deletePerson = container.resolve(DeletePersonService);

  //   const person = await deletePerson.execute({ person_id: id });

  //   return response.json(person);
  // }
}
