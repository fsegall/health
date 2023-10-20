import { injectable, inject } from 'tsyringe';

import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';

import Person from '../infra/typeorm/entities/Person';

@injectable()
class ListPersonsService {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
  ) {}

  public async execute(): Promise<Person[]> {
    const persons = await this.personsRepository.list();
    return persons;
  }
}

export default ListPersonsService;
