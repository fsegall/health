import { injectable, inject } from 'tsyringe';

import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

import Person from '../infra/typeorm/entities/Person';

interface IRequest {
  interviewer_id: string;
  person_id: string;
  logged_id: string;
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
class UpdatePersonService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
  ) {}
  public async execute(data: IRequest): Promise<Person | undefined> {
    const personsInterviewedByUser = await this.personsRepository.findByUser(
      data.interviewer_id,
    );

    const personWasInterviewedByUser = personsInterviewedByUser.find(
      person => person.id === data.person_id,
    );

    if (personsInterviewedByUser.length === 0) {
      throw new AppError('No person was interviewed by this user');
    }

    if (personWasInterviewedByUser?.interviewer_id !== data.logged_id) {
      throw new AppError(
        'You can only update a person interviewed by yourself.',
      );
    }

    const updatedUser = Object.assign(personWasInterviewedByUser, data);

    this.personsRepository.save(updatedUser);

    return updatedUser;
  }
}

export default UpdatePersonService;
