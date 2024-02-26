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
  estado_de_saude?: string;
  local_de_procura_do_servico_de_saude?: string;
  motivo_procura_servico_saude?: string;
  motivo_nao_atendimento_servico_saude?: string;
  doenca_ultimos_12_meses?: string;
  diagnostico_doenca_ultimos_12_meses?: string;
}

@injectable()
export default class CreatePersonService {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  
  public async execute(data: IRequest): Promise<Person> {
    const checkIsVisitor = await this.usersRepository.findById(
      data.interviewer_id,
    );

    if (checkIsVisitor?.role === Roles.VISITOR) {
      throw new AppError('O usuário não tem permissão para criar entrevistas.');
    }

    const person: Person = await this.personsRepository.create(data);

    return person;
  }
}
