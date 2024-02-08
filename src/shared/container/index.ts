import { container } from 'tsyringe';
import '@modules/users/providers';
import './providers';

import { DiscriminationRepository } from '@modules/discriminations/infra/typeorm/repositories/DiscriminationRepository';
import { IDiscriminationRepository } from '@modules/discriminations/repositories/IDiscriminationRepository';
import { AddressesRepository } from '@modules/households/infra/typeorm/repositories/AddressesRepository';
import HouseholdsRepository from '@modules/households/infra/typeorm/repositories/HouseholdsRepository';
import { IAddressesRepository } from '@modules/households/repositories/IAddressesRepository';
import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import { IndigeanousApoioRepository } from '@modules/indigenous/v1/infra/typeorm/repositories/IndigeanousApoioRepository';
import { IndigenousAlimentacaoNutricaoRepository } from '@modules/indigenous/v1/infra/typeorm/repositories/IndigenousAlimentacaoNutricaoRepository';
import { IndigenousInterviewDemographyRepository } from '@modules/indigenous/v1/infra/typeorm/repositories/IndigenousInterviewDemographyRepository';
import { IndigenousInterviewRepository } from '@modules/indigenous/v1/infra/typeorm/repositories/IndigenousInterviewRepository';
import { IndigeanousInterviewResidenceRepository } from '@modules/indigenous/v1/infra/typeorm/repositories/IndigenousInterviewResidenceRepository';
import { IndigenousSaudeDoencaRepository } from '@modules/indigenous/v1/infra/typeorm/repositories/IndigenousSaudeDoencaRepository';
import { IIndigenousAlimentacaoNutricaoRepository } from '@modules/indigenous/v1/repositories/IIndigenousAlimentacaoNutricaoRepository';
import { IIndigenousApoioEProtecaoRepository } from '@modules/indigenous/v1/repositories/IIndigenousApoioEProtecaoRepository';
import { IIndigenousInterviewDemographyRepository } from '@modules/indigenous/v1/repositories/IIndigenousInterviewDemographyRepository';
import { IIndigenousInterviewRepository } from '@modules/indigenous/v1/repositories/IIndigenousInterviewRepository';
import { IIndigenousInterviewResidenceRepository } from '@modules/indigenous/v1/repositories/IIndigenousInterviewResidenceRepository';
import { IIndigenousSaudeDoencaRepository } from '@modules/indigenous/v1/repositories/IIndigenousSaudeDoencaRepository';
import { IndigeanousApoioRepository as IndigeanousApoioRepositoryV2 } from '@modules/indigenous/v2/infra/typeorm/repositories/IndigeanousApoioRepository';
import { IndigenousAlimentacaoNutricaoRepository as IndigenousAlimentacaoNutricaoRepositoryV2 } from '@modules/indigenous/v2/infra/typeorm/repositories/IndigenousAlimentacaoNutricaoRepository';
import { IndigenousInterviewDemographyRepository as IndigenousInterviewDemographyRepositoryV2 } from '@modules/indigenous/v2/infra/typeorm/repositories/IndigenousInterviewDemographyRepository';
import { IndigenousInterviewRepository as IndigenousInterviewRepositoryV2 } from '@modules/indigenous/v2/infra/typeorm/repositories/IndigenousInterviewRepository';
import { IndigeanousInterviewResidenceRepository as IndigeanousInterviewResidenceRepositoryV2 } from '@modules/indigenous/v2/infra/typeorm/repositories/IndigenousInterviewResidenceRepository';
import { IndigenousSaudeDoencaRepository as IndigenousSaudeDoencaRepositoryV2 } from '@modules/indigenous/v2/infra/typeorm/repositories/IndigenousSaudeDoencaRepository';
import { IIndigenousAlimentacaoNutricaoRepository as IIndigenousAlimentacaoNutricaoRepositoryV2 } from '@modules/indigenous/v2/repositories/IIndigenousAlimentacaoNutricaoRepository';
import { IIndigenousApoioEProtecaoRepository as IIndigenousApoioEProtecaoRepositoryV2 } from '@modules/indigenous/v2/repositories/IIndigenousApoioEProtecaoRepository';
import { IIndigenousInterviewDemographyRepository as IIndigenousInterviewDemographyRepositoryV2 } from '@modules/indigenous/v2/repositories/IIndigenousInterviewDemographyRepository';
import { IIndigenousInterviewRepository as IIndigenousInterviewRepositoryV2 } from '@modules/indigenous/v2/repositories/IIndigenousInterviewRepository';
import { IIndigenousInterviewResidenceRepository as IIndigenousInterviewResidenceRepositoryV2 } from '@modules/indigenous/v2/repositories/IIndigenousInterviewResidenceRepository';
import { IIndigenousSaudeDoencaRepository as IIndigenousSaudeDoencaRepositoryV2 } from '@modules/indigenous/v2/repositories/IIndigenousSaudeDoencaRepository';
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

container.registerSingleton<IIndigenousInterviewRepositoryV2>(
  'IndigeanousInterviewV2Repository',
  IndigenousInterviewRepositoryV2,
);

container.registerSingleton<IIndigenousInterviewDemographyRepositoryV2>(
  'IndigeanousInterviewDemographyV2Repository',
  IndigenousInterviewDemographyRepositoryV2,
);

container.registerSingleton<IIndigenousInterviewResidenceRepositoryV2>(
  'IndigeanousInterviewResidenceV2Repository',
  IndigeanousInterviewResidenceRepositoryV2,
);

container.registerSingleton<IIndigenousSaudeDoencaRepositoryV2>(
  'IndigeanousSaudeDoencaV2Repository',
  IndigenousSaudeDoencaRepositoryV2,
);

container.registerSingleton<IIndigenousApoioEProtecaoRepositoryV2>(
  'IndigeanousApoioFinanceiroV2Repository',
  IndigeanousApoioRepositoryV2,
);

container.registerSingleton<IIndigenousAlimentacaoNutricaoRepositoryV2>(
  'IndigeanousAlimentacaoNutricaoV2Repository',
  IndigenousAlimentacaoNutricaoRepositoryV2,
);

container.registerSingleton<IDiscriminationRepository>(
  'DiscriminationRepository',
  DiscriminationRepository,
);

container.registerSingleton<IInterviewsLifeQualityViolenceRepository>(
  'InterviewLifeQualityRepository',
  InterviewsLifeQualityViolenceRepository,
);
