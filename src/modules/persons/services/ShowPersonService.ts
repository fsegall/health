import Person from '../infra/typeorm/entities/Person';
import AppError from '@shared/errors/AppError';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  person_id: string;
}

@injectable()
class ShowPersonService {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
  ) {}

  public async execute({ person_id }: IRequest): Promise<Person> {
    const person = await this.personsRepository.findById(person_id);

    if (!person) {
      throw new AppError('Person not found.');
    }

    return person;
  }
}

export default ShowPersonService;
