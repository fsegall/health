import { uuid } from 'uuidv4';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import { Roles } from '@modules/users/authorization/constants';

class UsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(
      user,
      {
        id: uuid(),
      },
      userData,
    );

    this.users.push(user);

    return user;
  }

  public async list(): Promise<User[]> {
    return this.users;
  }

  public async save(user: User): Promise<User> {
    // replace user object to simulate save
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);
    this.users[findIndex] = user;

    return user;
  }
}

export default UsersRepository;
