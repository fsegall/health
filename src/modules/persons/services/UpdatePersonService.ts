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
    age,
    gender,
    race_color,
    literacy,
    education,
    work_status,
    work_shift_reduction,
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
        age,
        gender,
        race_color,
        literacy,
        education,
        work_status,
        work_shift_reduction,
        covid_diagnose
      });

      this.personsRepository.save(updatedUser);

      return updatedUser;
    }
  }
}

export default UpdatePersonService;
