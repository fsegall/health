import { container } from 'tsyringe';
import '@modules/users/providers';
import './providers';

import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import PersonsRepository from '@modules/persons/infra/typeorm/repositories/PersonsRepository';

import IFamilyMembersRepository from '@modules/persons/repositories/IFamilyMembersRepository';
import FamilyMembersRepository from '@modules/persons/infra/typeorm/repositories/FamilyMembersRepository';

import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import HouseholdsRepository from '@modules/households/infra/typeorm/repositories/HouseholdsRepository';

import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';
import InterviewsRepository from '@modules/interviews/infra/typeorm/repositories/InterviewsRepository';

import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import ProjectsRepository from '@modules/projects/infra/typeorm/repositories/ProjectsRepository';

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

container.registerSingleton<IHouseholdsRepository>(
  'HouseholdsRepository',
  HouseholdsRepository,
);

container.registerSingleton<IInterviewsRepository>(
  'InterviewsRepository',
  InterviewsRepository,
);

container.registerSingleton<IProjectsRepository>(
  'ProjectsRepository',
  ProjectsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
