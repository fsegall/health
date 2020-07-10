import User from '../infra/typeorm/entities/User';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

interface IRequest {
  user_id: string;
  name: string;
  organization_name: string;
  telephone_number: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}
  public async execute({
    user_id,
    name,
    organization_name,
    telephone_number,
    email,
    old_password,
    password,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    const findUserSameEmail = await this.usersRepository.findByEmail(email);

    if (findUserSameEmail && findUserSameEmail.id !== user_id) {
      throw new AppError('There is already an user with this email');
    }

    if (password && !old_password) {
      throw new AppError(
        'You need to provide an old password to change your password',
      );
    }

    if (old_password && password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        old_password,
        user.password,
      );
      if (!checkOldPassword) {
        throw new AppError('Your old password does not match');
      }
    }

    if (password && old_password) {
      user.password = await this.hashProvider.generateHash(password);
    }

    const updatedUser = Object.assign(user, {
      name,
      email,
      organization_name,
      telephone_number,
    });
    return this.usersRepository.save(updatedUser);
  }
}

export default UpdateProfileService;
