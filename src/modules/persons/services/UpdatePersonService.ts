import Person from '../infra/typeorm/entities/Person';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  interviewer_id: string;
  person_id: string;
  logged_id: string;
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
class UpdatePersonService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
  ) { }
  public async execute({
    interviewer_id,
    person_id,
    logged_id,
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
  }: IRequest): Promise<Person | undefined> {
    const personsInterviewedByUser = await this.personsRepository.findByUser(
      interviewer_id,
    );

    const personWasInterviewedByUser = personsInterviewedByUser.find(
      person => person.id === person_id,
    );

    if (personsInterviewedByUser.length === 0) {
      throw new AppError('No person was interviewed by this user');
    }

    if (personWasInterviewedByUser?.interviewer_id !== logged_id) {
      throw new AppError(
        'You can only update a person interviewed by yourself.',
      );
    }

    if (personWasInterviewedByUser) {
      const updatedUser = Object.assign(personWasInterviewedByUser, {
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

      this.personsRepository.save(updatedUser);

      return updatedUser;
    }
  }
}

export default UpdatePersonService;
