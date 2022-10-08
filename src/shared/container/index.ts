import { container } from 'tsyringe';
import '@modules/users/providers';
import './providers';

import HouseholdsRepository from '@modules/households/infra/typeorm/repositories/HouseholdsRepository';
import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import { IndigeanousAlimentacaoNutricaoRepository } from '@modules/indiagenous/infra/typeorm/repositories/IndigeanousAlimentacaoNutricaoRepository';
import { IndigeanousApoioRepository } from '@modules/indiagenous/infra/typeorm/repositories/IndigeanousApoioRepository';
import { IndigeanousInterviewDemographyRepository } from '@modules/indiagenous/infra/typeorm/repositories/IndigeanousInterviewDemographyRepository';
import { IndigeanousInterviewRepository } from '@modules/indiagenous/infra/typeorm/repositories/IndigeanousInterviewRepository';
import { IndigeanousInterviewResidenceRepository } from '@modules/indiagenous/infra/typeorm/repositories/IndigeanousInterviewResidenceRepository';
import { IndigeanousSaudeDoencaRepository } from '@modules/indiagenous/infra/typeorm/repositories/IndigeanousSaudeDoencaRepository';
import { IIndigeanousAlimentacaoNutricaoRepository } from '@modules/indiagenous/repositories/IIndigeanousAlimentacaoNutricaoRepository';
import { IIndigeanousApoioRepository } from '@modules/indiagenous/repositories/IIndigeanousApoioRepository';
import { IIndigeanousInterviewDemographyRepository } from '@modules/indiagenous/repositories/IIndigeanousInterviewDemographyRepository';
import { IIndigeanousInterviewRepository } from '@modules/indiagenous/repositories/IIndigeanousInterviewRepository';
import { IIndigeanousInterviewResidenceRepository } from '@modules/indiagenous/repositories/IIndigeanousInterviewResidenceRepository';
import { IIndigeanousSaudeDoencaRepository } from '@modules/indiagenous/repositories/IIndigeanousSaudeDoencaRepository';
import InterviewsRepository from '@modules/interviews/infra/typeorm/repositories/InterviewsRepository';
import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';
import FamilyMembersRepository from '@modules/persons/infra/typeorm/repositories/FamilyMembersRepository';
import PersonsRepository from '@modules/persons/infra/typeorm/repositories/PersonsRepository';
import IFamilyMembersRepository from '@modules/persons/repositories/IFamilyMembersRepository';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import ProjectsRepository from '@modules/projects/infra/typeorm/repositories/ProjectsRepository';
import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

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

container.registerSingleton<IIndigeanousInterviewRepository>(
  'IndigeanousInterviewRepository',
  IndigeanousInterviewRepository,
);

container.registerSingleton<IIndigeanousInterviewDemographyRepository>(
  'IndigeanousInterviewDemographyRepository',
  IndigeanousInterviewDemographyRepository,
);

container.registerSingleton<IIndigeanousInterviewResidenceRepository>(
  'IndigeanousInterviewResidenceRepository',
  IndigeanousInterviewResidenceRepository,
);

container.registerSingleton<IIndigeanousSaudeDoencaRepository>(
  'IndigeanousSaudeDoencaRepository',
  IndigeanousSaudeDoencaRepository,
);

container.registerSingleton<IIndigeanousApoioRepository>(
  'IndigeanousApoioFinanceiroRepository',
  IndigeanousApoioRepository,
);

container.registerSingleton<IIndigeanousAlimentacaoNutricaoRepository>(
  'IndigeanousAlimentacaoNutricaoRepository',
  IndigeanousAlimentacaoNutricaoRepository,
);
