import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';
import AppError from '../errors/AppError';
interface Request {
  name: string;
  email: string;
  organization_name: string;
  telephone_number: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    organization_name,
    telephone_number,
    password,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUsersExists = await usersRepository.findOne({
      where: { email },
    });

    // O service só dispara erros e não respostas http
    if (checkUsersExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    // Síncrono - Somente cria o objeto

    const user = usersRepository.create({
      name,
      email,
      organization_name,
      telephone_number,
      password: hashedPassword,
    });

    // Assíncrono - salva o objeto no banco

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
