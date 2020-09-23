import Person from '@modules/persons/infra/typeorm/entities/Person';
import { injectable, inject } from 'tsyringe';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';

// import AppError from '../errors/AppError';

interface IRequest {
  interviewer_id: string;
  name: string;
  date_of_birth: Date;
  gender: string;
  race_color: string;
  literacy: string;
  education: string;
  unemployed?: boolean;
  employed_normal_salary?: boolean;
  employed_salary_reduced?: boolean;
  employed_vacations?: boolean;
  employed_on_leave_salary_reduced?: boolean;
  employed_on_leave_normal_salary?: boolean;
  employed_on_leave_no_salary?: boolean;
  retired?: boolean;
  self_employed_legally?: boolean;
  odd_jobs?: boolean;
  revenue?: boolean;
  employer?: boolean;
  work_status: string;
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
    date_of_birth,
    gender,
    race_color,
    literacy,
    education,
    unemployed,
    employed_normal_salary,
    employed_salary_reduced,
    employed_vacations,
    employed_on_leave_salary_reduced,
    employed_on_leave_normal_salary,
    employed_on_leave_no_salary,
    retired,
    self_employed_legally,
    odd_jobs,
    revenue,
    employer,
    work_status,
    covid_diagnose
  }: IRequest): Promise<Person> {
    const person: Person = await this.personsRepository.create({
      interviewer_id,
      name,
      date_of_birth,
      gender,
      race_color,
      literacy,
      education,
      unemployed,
      employed_normal_salary,
      employed_salary_reduced,
      employed_vacations,
      employed_on_leave_salary_reduced,
      employed_on_leave_normal_salary,
      employed_on_leave_no_salary,
      retired,
      self_employed_legally,
      odd_jobs,
      revenue,
      employer,
      work_status,
      covid_diagnose
    });

    return person;
  }
}
