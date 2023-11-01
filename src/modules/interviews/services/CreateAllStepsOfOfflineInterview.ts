import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { inject, injectable } from 'tsyringe';

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
      data.map(async interviewsData => {
        await Promise.all(
          Object.entries(interviewsData).map(async ([key, interview]) => {
            const project = await this.projectsRepository.findByNumber(
              interview.interview.project_number,
            );

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

            const existentInterview = await this.interviewsRepository.findAlreadyRegistered(
              {
                interviewer_id: interview.person.interviewer_id,
                person_idade: interview.person.idade,
                person_nome: interview.person.nome,
                project_number: interview.interview.project_number,
              },
            );

            if (existentInterview) {
              console.error('Entrevista já foi salva');
            }

            try {
              await this.personsRepository.create(interview.person);
            } catch (error) {
              console.error('Erro ao salvar dados da pessoa', error);
              unsavedInterviews = {
                ...unsavedInterviews,
                [key]: interview,
              };
            }

            try {
              await this.householdsRepository.create(interview.household);
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

            try {
              await this.addressesRepository.create(interview.address);
            } catch (error) {
              console.error('Erro ao salvar endereço da pessoa', error);
              unsavedInterviews = {
                ...unsavedInterviews,
                [key]: interview,
              };
            }

            try {
              await this.interviewsRepository.create(interview.interview);
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
