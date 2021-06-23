import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import UpdateProfileService from './UpdateProfileService';
import AppError from '@shared/errors/AppError';
import { Roles } from '@modules/users/authorization/constants';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;
describe('UpdateUserProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });
  it('should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      organization_name: 'Company',
      email: 'johndoe@example.com',
      telephone_number: '112233445566',
      password: '123456',
      role: Roles.INTERVIEWER
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      organization_name: 'JohnCo',
      telephone_number: '112233445588',
      email: 'johntre@example.com',
    });

    expect(updatedUser.name).toBe('John Trê');
    expect(updatedUser.email).toBe('johntre@example.com');
  });

  it('should not be able to change email to an email used by another user', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      organization_name: 'Company',
      email: 'johndoe@example.com',
      telephone_number: '112233445566',
      password: '123456',
      role: Roles.INTERVIEWER
    });

    const user = await fakeUsersRepository.create({
      name: 'Test',
      organization_name: 'TestCompany',
      email: 'test@example.com',
      telephone_number: '112233445533',
      password: '123456',
      role: Roles.INTERVIEWER
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Trê',
        organization_name: 'JohnCo',
        telephone_number: '112233445588',
        email: 'johndoe@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password without providing old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      organization_name: 'Company',
      email: 'johndoe@example.com',
      telephone_number: '112233445566',
      password: '123456',
      role: Roles.INTERVIEWER
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Trê',
        organization_name: 'JohnCo',
        telephone_number: '112233445588',
        email: 'johntre@example.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      organization_name: 'Company',
      email: 'johndoe@example.com',
      telephone_number: '112233445566',
      password: '123456',
      role: Roles.INTERVIEWER
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Trê',
        organization_name: 'JohnCo',
        telephone_number: '112233445588',
        email: 'johntre@example.com',
        password: '123123',
        old_password: '123455',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
