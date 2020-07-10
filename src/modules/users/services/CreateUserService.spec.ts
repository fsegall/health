import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';
import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });
  it('should be able to create a user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      organization_name: 'Company',
      email: 'johndoe@example.com',
      telephone_number: '112233445566',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with the same email of another user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      organization_name: 'Company',
      email: 'johndoe@example.com',
      telephone_number: '112233445566',
      password: '123456',
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        organization_name: 'Company',
        email: 'johndoe@example.com',
        telephone_number: '112233445566',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
