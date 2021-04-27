import Person from '@modules/persons/infra/typeorm/entities/Person';
import { injectable, inject } from 'tsyringe';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';

// import AppError from '../errors/AppError';

interface IRequest {
  interviewer_id: string;
  name: string;
  age: number;
  gender: string;
  race_color: string;
  literacy: string;
  education: string;
  work_status: string;
  work_shift_reduction?: string;
  covid_diagnose: string;
}

@injectable()
export default class CreatePersonService {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
  ) { }
  public async execute({
    interviewer_id,
    name,
    age,
    gender,
    race_color,
    literacy,
    education,
    work_status,
    work_shift_reduction,
    covid_diagnose
  }: IRequest): Promise<Person> {
    const person: Person = await this.personsRepository.create({
      interviewer_id,
      name,
      age,
      gender,
      race_color,
      literacy,
      education,
      work_status,
      work_shift_reduction,
      covid_diagnose
    });

    return person;
  }
}
