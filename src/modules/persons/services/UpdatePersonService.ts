import Person from '../infra/typeorm/entities/Person';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

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

    /*     if (personWasInterviewedByUser?.interviewer_id !== logged_id) {
          throw new AppError(
            'You can only update a person interviewed by yourself.',
          );
        } */ // Fix babel to compile ?. syntax

    if (personWasInterviewedByUser) {
      const updatedUser = Object.assign(personWasInterviewedByUser, {
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

      this.personsRepository.save(updatedUser);

      return updatedUser;
    }
  }
}

export default UpdatePersonService;
