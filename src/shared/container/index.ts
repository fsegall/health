import { container } from 'tsyringe';
import '@modules/users/providers';
import './providers';

import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import PersonsRepository from '@modules/persons/infra/typeorm/repositories/PersonsRepository';

import IFamilyMembersRepository from '@modules/persons/repositories/IFamilyMembersRepository';
import FamilyMembersRepository from '@modules/persons/infra/typeorm/repositories/FamilyMembersRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

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
