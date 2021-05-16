import Person from '@modules/persons/infra/typeorm/entities/Person';
import { injectable, inject } from 'tsyringe';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';

// import AppError from '../errors/AppError';

interface IRequest {
  interviewer_id: string;
  nome: string;
  idade: number;
  sexo: string;
  raca_cor: string;
  ler_escrever: string;
  escolaridade: string;
  situacao_de_trabalho: string;
  ocupacao: string;
  local_de_trabalho: string;
  diagnostico_covid: string;
}

@injectable()
export default class CreatePersonService {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
  ) { }
  public async execute({
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
  }: IRequest): Promise<Person> {
    const person: Person = await this.personsRepository.create({
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

    return person;
  }
}
