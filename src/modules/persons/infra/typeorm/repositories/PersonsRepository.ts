import { getRepository, Repository } from 'typeorm';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import ICreatePersonDTO from '@modules/persons/dtos/ICreatePersonDTO';
import Person from '@modules/persons/infra/typeorm/entities/Person';
import AppError from '@shared/errors/AppError';

class PersonsRepository implements IPersonsRepository {
  private ormRepository: Repository<Person>;

  constructor() {
    this.ormRepository = getRepository(Person);
  }

  public async create({
    interviewer_id,
    nome,
    idade,
    sexo,
    raca_cor,
    ler_escrever,
    escolaridade,
    situacao_de_trabalho,
    ocupacao,
    local_de_trabalho,
    diagnostico_covid,
  }: ICreatePersonDTO): Promise<Person> {
    const person = this.ormRepository.create({
      interviewer_id,
      nome,
      idade,
      sexo,
      raca_cor,
      ler_escrever,
      escolaridade,
      situacao_de_trabalho,
      ocupacao,
      local_de_trabalho,
      diagnostico_covid,
    });
    await this.ormRepository.save(person);
    return person;
  }

  public async findById(person_id: string): Promise<Person | undefined> {
    const person = await this.ormRepository.findOne(person_id);
    return person;
  }

  public async list(): Promise<Person[]> {
    const persons = this.ormRepository.find();
    return persons;
  }

  public async save(person: Person): Promise<Person> {
    return this.ormRepository.save(person);
  }

  public async delete(person_id: string): Promise<void> {
    const person = await this.ormRepository.findOne(person_id);

    if (!person) {
      throw new AppError('There is no person with this id.');
    }
    await this.ormRepository.remove(person);
  }

  public async findByUser(user_id: string): Promise<Person[]> {
    const persons = this.ormRepository.find({
      where: {
        interviewer_id: user_id,
      },
    });
    return persons;
  }
}

export default PersonsRepository;
