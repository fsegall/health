import { injectable, inject } from 'tsyringe';

import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import AppError from '@shared/errors/AppError';

import Person from '../infra/typeorm/entities/Person';

interface IRequest {
  person_id: string;
}

@injectable()
class DeletePersonService {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
  ) {}

  public async execute({ person_id }: IRequest): Promise<Person> {
    const person = await this.personsRepository.findById(person_id);

    if (!person) {
      throw new AppError('Person not found.');
    }

    await this.personsRepository.delete(person_id);

    return person;
  }
}

export default DeletePersonService;
