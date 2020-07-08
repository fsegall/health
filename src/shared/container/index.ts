import { container } from 'tsyringe';
import '@modules/users/providers';
import './providers';

import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import PersonsRepository from '@modules/persons/infra/typeorm/repositories/PersonsRepository';

import IFamilyMembersRepository from '@modules/persons/repositories/IFamilyMembersRepository';
import FamilyMembersRepository from '@modules/persons/infra/typeorm/repositories/FamilyMembersRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IPersonsRepository>(
  'PersonsRepository',
  PersonsRepository,
);

container.registerSingleton<IFamilyMembersRepository>(
  'FamilyMembersRepository',
  FamilyMembersRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
