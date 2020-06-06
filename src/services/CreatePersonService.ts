import Person from '../models/Person';
import { getCustomRepository } from 'typeorm';
import PersonsRepository from '../repositories/PersonsRepository';
// import AppError from '../errors/AppError';
// O Service não tem acesso ao Request e Response
interface Request {
  interviewer_id: string;
  name: string;
  date_of_birth: Date;
  gender: string;
  race_color: string;
  religion: string;
  marital_status: string;
  literacy: boolean;
  education: string;
  work_status: string;
  health_conditions: string;
}

export default class CreatePersonService {
  public async execute({
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
  }: Request): Promise<Person> {
    const personsRepository = getCustomRepository(PersonsRepository);

    const person: Person = personsRepository.create({
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

    // Save to db
    await personsRepository.save(person);

    // returns to http request
    return person;
  }
}
