import { injectable, inject } from 'tsyringe';

import Person from '@modules/persons/infra/typeorm/entities/Person';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import { Roles } from '@modules/users/authorization/constants';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

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
  vacina: string;
  nao_tomou_vacina?: string;
}

@injectable()
export default class CreatePersonService {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
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
    vacina,
    nao_tomou_vacina,
  }: IRequest): Promise<Person> {
    const checkIsVisitor = await this.usersRepository.findById(interviewer_id);

    if (checkIsVisitor?.role === Roles.VISITOR) {
      throw new AppError('O usuário não tem permissão para criar entrevistas.');
    }

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
      vacina,
      nao_tomou_vacina,
    });

    return person;
  }
}
