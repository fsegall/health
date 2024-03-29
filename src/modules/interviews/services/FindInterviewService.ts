import fs from 'fs';
import { join } from 'path';
import { injectable, inject } from 'tsyringe';

import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';

import HandleOfflineInterviewService from './CreateAllStepsOfOfflineInterview';

@injectable()
class FindInterviewsService {
  constructor(
    @inject('InterviewsRepository')
    private interviewsRepository: IInterviewsRepository,
    private createAllStepsOfOfflineInterviewService: HandleOfflineInterviewService,
  ) {}

  public async createOfflineRequestBackup(data: any): Promise<void> {
    const backUpName = String(`backup-${new Date().getTime()}`);
    const dirPath = `src/backups`;
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(
      join(process.cwd(), `${dirPath}/${backUpName}.json`),
      JSON.stringify(data),
      'utf8',
    );
  }

  public async handleAllOfflineInterviews(
    offlineInterviews: any,
  ): Promise<any> {
    const notRegistered: any = [];
    await Promise.all(
      offlineInterviews?.map(async (offlineInterview: any) => {
        const data: any = Object.values(offlineInterview)?.[0];
        const person_nome = data?.person?.nome;
        const person_idade = data?.person?.idade;
        const interviewer_id = data?.person?.interviewer_id;
        const project_number = data?.interview?.project_number;

        if (interviewer_id && person_nome && person_idade && project_number) {
          const isSaved = await this.validateIfInterviewHasBeenRegistered({
            interviewer_id,
            person_nome,
            person_idade,
            project_number,
          });
          if (!isSaved) {
            notRegistered.push(offlineInterview);
            await this.createAllStepsOfOfflineInterviewService.createAll({
              person: data?.person,
              household: data?.household,
              address: data?.address,
              interviewData: data?.interview,
            });
          }
        }
      }),
    );
    return notRegistered;
  }

  private async validateIfInterviewHasBeenRegistered({
    person_nome,
    person_idade,
    project_number,
    interviewer_id,
  }: {
    person_nome: string;
    person_idade: number;
    project_number: number;
    interviewer_id: string;
  }): Promise<boolean> {
    const isRegistered: boolean = await this.interviewsRepository.findAlreadyRegistered(
      {
        interviewer_id,
        person_nome,
        person_idade,
        project_number,
      },
    );
    return isRegistered;
  }
}

export default FindInterviewsService;
