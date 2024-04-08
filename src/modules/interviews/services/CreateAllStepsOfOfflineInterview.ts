import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { inject, injectable } from 'tsyringe';

import { IMentalHealthRepository } from '@modules/discriminations/repositories/ICreateMentalHealthRepository';
import { IViolenceRepository } from '@modules/discriminations/repositories/ICreateViolenceRepository';
import { IDiscriminationRepository } from '@modules/discriminations/repositories/IDiscriminationRepository';
import { IAddressesRepository } from '@modules/households/repositories/IAddressesRepository';
import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';

import { IHandleOfflineInterviewDTO } from '../dtos/IHandleOfflineInterviewDTO';
import IInterviewsRepository from '../repositories/IInterviewsRepository';

@injectable()
export default class HandleOfflineInterviewService {
  constructor(
    @inject('ProjectsRepository')
    private readonly projectsRepository: IProjectsRepository,
    @inject('InterviewsRepository')
    private readonly interviewsRepository: IInterviewsRepository,
    @inject('PersonsRepository')
    private readonly personsRepository: IPersonsRepository,
    @inject('HouseholdsRepository')
    private readonly householdsRepository: IHouseholdsRepository,
    @inject('AddressesRepository')
    private readonly addressesRepository: IAddressesRepository,
    @inject('DiscriminationRepository')
    private readonly discriminationRepository: IDiscriminationRepository,
    @inject('ViolenceRepository')
    private readonly violenceRepository: IViolenceRepository,
    @inject('MentalHealthRepository')
    private readonly mentalHealthRepository: IMentalHealthRepository,
  ) {}

  private createOfflineRequestBackup(data: IHandleOfflineInterviewDTO[]) {
    const backupFileName = `backup-interviews-${new Date().getTime()}`;
    const dirPath = `src/backups`;
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }
    writeFileSync(
      join(process.cwd(), `${dirPath}/${backupFileName}.json`),
      JSON.stringify(data),
      'utf-8',
    );
  }

  async execute(data: IHandleOfflineInterviewDTO[]) {
    this.createOfflineRequestBackup(data);
    let unsavedInterviews = {};

    await Promise.all(
      data?.map(async interviewsData => {
        await Promise.all(
          Object.entries(interviewsData).map(async ([key, interview]) => {
            const project = await this.projectsRepository.findByNumber(
              interview.interview.project_number,
            );

            let person_id = null;
            let household_id = null;
            let address_id = null;
            let discrimination_id = null;
            let violence_id = null;
            let mental_health_id = null;

            if (!project) {
              unsavedInterviews = {
                ...unsavedInterviews,
                [key]: interview,
              };
              console.error(
                `Entrevista ${key} não foi criada pois não possui projeto vinculado`,
              );
              return;
            }

            const existentInterview =
              await this.interviewsRepository.findAlreadyRegistered({
                interviewer_id: interview.person.interviewer_id,
                person_idade: interview.person.idade,
                person_nome: interview.person.nome,
                project_number: interview.interview.project_number,
              });

            if (existentInterview) {
              console.error('Entrevista já foi salva');
            }

            try {
              const person = await this.personsRepository.create(
                interview.person,
              );
              person_id = person.id;
            } catch (error) {
              console.error('Erro ao salvar dados da pessoa', error);
              unsavedInterviews = {
                ...unsavedInterviews,
                [key]: interview,
              };
            }

            try {
              const household = await this.householdsRepository.create({
                ...interview.household,
                person_id,
              });
              household_id = household.id;
            } catch (error) {
              console.error(
                'Erro ao salvar dados demográficos da pessoa',
                error,
              );
              unsavedInterviews = {
                ...unsavedInterviews,
                [key]: interview,
              };
            }

            if (interview.discrimination) {
              try {
                const discrimination =
                  await this.discriminationRepository.create({
                    ...interview.discrimination,
                    person_id,
                  });
                discrimination_id = discrimination.id;
              } catch (error) {
                console.error('Erro ao salvar módulo de discriminação', error);
                unsavedInterviews = {
                  ...unsavedInterviews,
                  [key]: interview,
                };
              }
            }

            if (interview.violence) {
              try {
                const violence = await this.violenceRepository.create({
                  ...interview.violence,
                  person_id,
                });
                violence_id = violence.id;
              } catch (error) {
                console.error('Erro ao salvar módulo de violência', error);
                unsavedInterviews = {
                  ...unsavedInterviews,
                  [key]: interview,
                };
              }
            }

            if (interview.mental_health) {
              try {
                const mental_health = await this.mentalHealthRepository.create({
                  ...interview.mental_health,
                  person_id,
                });
                mental_health_id = mental_health.id;
              } catch (error) {
                console.error('Erro ao salvar módulo de saúde mental', error);
                unsavedInterviews = {
                  ...unsavedInterviews,
                  [key]: interview,
                };
              }
            }

            try {
              const address = await this.addressesRepository.create({
                ...interview.address,
                person_id,
                household_id,
              });
              address_id = address.id;
            } catch (error) {
              console.error('Erro ao salvar endereço da pessoa', error);
              unsavedInterviews = {
                ...unsavedInterviews,
                [key]: interview,
              };
            }

            try {
              await this.interviewsRepository.create({
                ...interview.interview,
                address_id,
                person_id,
                household_id,
                violence_id,
                discrimination_id,
                mental_health_id,
              });
            } catch (error) {
              console.error('Erro ao salvar entrevista da pessoa', error);
              unsavedInterviews = {
                ...unsavedInterviews,
                [key]: interview,
              };
            }
          }),
        );
      }),
    );

    return unsavedInterviews;
  }
}
