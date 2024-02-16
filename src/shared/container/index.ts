import { container } from 'tsyringe';
import '@modules/users/providers';
import './providers';

import { DiscriminationRepository } from '@modules/discriminations/infra/typeorm/repositories/DiscriminationRepository';
import { IDiscriminationRepository } from '@modules/discriminations/repositories/IDiscriminationRepository';
import { AddressesRepository } from '@modules/households/infra/typeorm/repositories/AddressesRepository';
import HouseholdsRepository from '@modules/households/infra/typeorm/repositories/HouseholdsRepository';
import { IAddressesRepository } from '@modules/households/repositories/IAddressesRepository';
import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import { IndigeanousApoioRepository } from '@modules/indigenous/infra/typeorm/repositories/IndigeanousApoioRepository';
import { IndigenousAlimentacaoNutricaoRepository } from '@modules/indigenous/infra/typeorm/repositories/IndigenousAlimentacaoNutricaoRepository';
import { IndigenousInterviewDemographyRepository } from '@modules/indigenous/infra/typeorm/repositories/IndigenousInterviewDemographyRepository';
import { IndigenousInterviewRepository } from '@modules/indigenous/infra/typeorm/repositories/IndigenousInterviewRepository';
import { IndigeanousInterviewResidenceRepository } from '@modules/indigenous/infra/typeorm/repositories/IndigenousInterviewResidenceRepository';
import { IndigenousSaudeDoencaRepository } from '@modules/indigenous/infra/typeorm/repositories/IndigenousSaudeDoencaRepository';
import { IIndigenousAlimentacaoNutricaoRepository } from '@modules/indigenous/repositories/IIndigenousAlimentacaoNutricaoRepository';
import { IIndigenousApoioEProtecaoRepository } from '@modules/indigenous/repositories/IIndigenousApoioEProtecaoRepository';
import { IIndigenousInterviewDemographyRepository } from '@modules/indigenous/repositories/IIndigenousInterviewDemographyRepository';
import { IIndigenousInterviewRepository } from '@modules/indigenous/repositories/IIndigenousInterviewRepository';
import { IIndigenousInterviewResidenceRepository } from '@modules/indigenous/repositories/IIndigenousInterviewResidenceRepository';
import { IIndigenousSaudeDoencaRepository } from '@modules/indigenous/repositories/IIndigenousSaudeDoencaRepository';
import { InterviewsLifeQualityViolenceRepository } from '@modules/interviews/infra/typeorm/repositories/InterviewsLifeQualityViolenceRepository';
import InterviewsRepository from '@modules/interviews/infra/typeorm/repositories/InterviewsRepository';
import { IInterviewsLifeQualityViolenceRepository } from '@modules/interviews/repositories/IInterviewsQualityLifeViolenceRepository';
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

container.registerSingleton<IAddressesRepository>(
  'AddressesRepository',
  AddressesRepository,
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

container.registerSingleton<IIndigenousInterviewResidenceRepository>(
  'IndigeanousInterviewResidenceRepository',
  IndigeanousInterviewResidenceRepository,
);

container.registerSingleton<IIndigenousSaudeDoencaRepository>(
  'IndigeanousSaudeDoencaRepository',
  IndigenousSaudeDoencaRepository,
);

container.registerSingleton<IIndigenousApoioEProtecaoRepository>(
  'IndigeanousApoioFinanceiroRepository',
  IndigeanousApoioRepository,
);

container.registerSingleton<IIndigenousAlimentacaoNutricaoRepository>(
  'IndigeanousAlimentacaoNutricaoRepository',
  IndigenousAlimentacaoNutricaoRepository,
);

container.registerSingleton<IDiscriminationRepository>(
  'DiscriminationRepository',
  DiscriminationRepository,
);

container.registerSingleton<IInterviewsLifeQualityViolenceRepository>(
  'InterviewLifeQualityRepository',
  InterviewsLifeQualityViolenceRepository,
);
