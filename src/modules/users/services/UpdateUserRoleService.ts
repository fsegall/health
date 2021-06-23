import User from '../infra/typeorm/entities/User';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { Roles } from '@modules/users/authorization/constants';

interface IRequest {
  gives_permition_id: string;
  receives_permition_id: string;
}

@injectable()
class UpdateUserRoleService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }
  public async execute({
    gives_permition_id,
    receives_permition_id,
  }: IRequest): Promise<User> {

    const checkCoordinator = await this.usersRepository.findById(gives_permition_id);
    const checkInterviewer = await this.usersRepository.findById(receives_permition_id);

    if (checkCoordinator?.role === Roles.INTERVIEWER) {
      throw new AppError('User cannot assign permitions.');
    }

    const updatedUser = Object.assign(checkInterviewer, {
      role: 'COORDINATOR'
    });

    return this.usersRepository.save(updatedUser);

  }
}

export default UpdateUserRoleService;
