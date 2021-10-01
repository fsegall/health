import User from '../infra/typeorm/entities/User';
import { Roles } from '../authorization/constants';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { injectable, inject } from 'tsyringe';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  name: string;
  organization_name: string;
  email: string;
  telephone_number: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) { }
  public async execute({
    name,
    organization_name,
    email,
    telephone_number,
    password,
  }: IRequest): Promise<User> {
    const checkUsersExists = await this.usersRepository.findByEmail(email);

    if (checkUsersExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      organization_name,
      email,
      telephone_number,
      password: hashedPassword,
      role: Roles.VISITOR
    });

    return user;
  }
}

export default CreateUserService;
