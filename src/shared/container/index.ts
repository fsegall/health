import { container } from 'tsyringe';
import '@modules/users/providers';
import './providers';

import HouseholdsRepository from '@modules/households/infra/typeorm/repositories/HouseholdsRepository';
import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import { IndigeanousAlimentacaoNutricaoRepository } from '@modules/indigenous/infra/typeorm/repositories/IndigeanousAlimentacaoNutricaoRepository';
import { IndigeanousApoioRepository } from '@modules/indigenous/infra/typeorm/repositories/IndigeanousApoioRepository';
import { IndigenousInterviewDemographyRepository } from '@modules/indigenous/infra/typeorm/repositories/IndigenousInterviewDemographyRepository';
import { IndigenousInterviewRepository } from '@modules/indigenous/infra/typeorm/repositories/IndigenousInterviewRepository';
import { IndigeanousInterviewResidenceRepository } from '@modules/indigenous/infra/typeorm/repositories/IndigenousInterviewResidenceRepository';
import { IndigenousSaudeDoencaRepository } from '@modules/indigenous/infra/typeorm/repositories/IndigenousSaudeDoencaRepository';
import { IIndigeanousAlimentacaoNutricaoRepository } from '@modules/indigenous/repositories/IIndigeanousAlimentacaoNutricaoRepository';
import { IIndigeanousApoioRepository } from '@modules/indigenous/repositories/IIndigeanousApoioRepository';
import { IIndigeanousInterviewResidenceRepository } from '@modules/indigenous/repositories/IIndigeanousInterviewResidenceRepository';
import { IIndigenousSaudeDoencaRepository } from '@modules/indigenous/repositories/IIndigeanousSaudeDoencaRepository';
import { IIndigenousInterviewDemographyRepository } from '@modules/indigenous/repositories/IIndigenousInterviewDemographyRepository';
import { IIndigenousInterviewRepository } from '@modules/indigenous/repositories/IIndigenousInterviewRepository';
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

container.registerSingleton<IIndigenousInterviewRepository>(
  'IndigeanousInterviewRepository',
  IndigenousInterviewRepository,
);

container.registerSingleton<IIndigenousInterviewDemographyRepository>(
  'IndigeanousInterviewDemographyRepository',
  IndigenousInterviewDemographyRepository,
);

container.registerSingleton<IIndigeanousInterviewResidenceRepository>(
  'IndigeanousInterviewResidenceRepository',
  IndigeanousInterviewResidenceRepository,
);

container.registerSingleton<IIndigenousSaudeDoencaRepository>(
  'IndigeanousSaudeDoencaRepository',
  IndigenousSaudeDoencaRepository,
);

container.registerSingleton<IIndigeanousApoioRepository>(
  'IndigeanousApoioFinanceiroRepository',
  IndigeanousApoioRepository,
);

container.registerSingleton<IIndigeanousAlimentacaoNutricaoRepository>(
  'IndigeanousAlimentacaoNutricaoRepository',
  IndigeanousAlimentacaoNutricaoRepository,
);
