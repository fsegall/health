import { writeFileSync } from 'fs';
import { join } from 'path';
import { inject, injectable } from 'tsyringe';

import { IHandleOfflineInterviewsDTO } from '../dtos/IHandleOfflineInterviewsDTO';
import { IIndigenousAlimentacaoNutricaoRepository } from '../repositories/IIndigenousAlimentacaoNutricaoRepository';
import { IIndigenousApoioEProtecaoRepository } from '../repositories/IIndigenousApoioEProtecaoRepository';
import { IIndigenousInterviewDemographyRepository } from '../repositories/IIndigenousInterviewDemographyRepository';
import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';
import { IIndigenousInterviewResidenceRepository } from '../repositories/IIndigenousInterviewResidenceRepository';
import { IIndigenousSaudeDoencaRepository } from '../repositories/IIndigenousSaudeDoencaRepository';

@injectable()
export class HandleOfflineInterviewsService {
  constructor(
    @inject('IndigeanousInterviewRepository')
    private indigenousInterviewRepository: IIndigenousInterviewRepository,

    @inject('IndigeanousInterviewDemographyRepository')
    private indigenousInterviewDemographyRepository: IIndigenousInterviewDemographyRepository,

    @inject('IndigeanousInterviewResidenceRepository')
    private indigeanousInterviewResidenceRepository: IIndigenousInterviewResidenceRepository,

    @inject('IndigeanousSaudeDoencaRepository')
    private indigeanousSaudeDoencaRepository: IIndigenousSaudeDoencaRepository,

    @inject('IndigeanousAlimentacaoNutricaoRepository')
    private indigenousAlimentacaoNutricaoRepository: IIndigenousAlimentacaoNutricaoRepository,

    @inject('IndigeanousApoioFinanceiroRepository')
    private indigenousApoioEProtecaoRepository: IIndigenousApoioEProtecaoRepository,
  ) {}

  private createOfflineRequestBackup(data: IHandleOfflineInterviewsDTO[]) {
    const backupFileName = `backup-indigenousInterview-${new Date().getTime()}`;
    writeFileSync(
      join(process.cwd(), `src/backups/${backupFileName}.json`),
      JSON.stringify(data),
      'utf-8',
    );
  }

  async execute(data: IHandleOfflineInterviewsDTO[]) {
    this.createOfflineRequestBackup(data);
    console.log("data", data)
    const interviewsToSave = data.map(async interview => {
      console.log("Município: ", interview?.interview?.municipio)
      console.log("Entrevista: ", interview.interview)
      const indigenousInterview = await this.indigenousInterviewRepository.create(
        interview.interview,
      );

      await this.indigenousInterviewDemographyRepository.create({
        ...interview.demography,
        entrevista_indigena_id: indigenousInterview.id,
      });

      await this.indigeanousInterviewResidenceRepository.create({
        ...interview.residence,
        veiculos: interview.residence.veiculos.toString(),
        destino_lixo_da_residencia: interview.residence.destino_lixo_da_residencia.toString(),
        entrevista_indigena_id: indigenousInterview.id,
      });

      await this.indigeanousSaudeDoencaRepository.create({
        ...interview.saude_doenca,
        entrevista_indigena_id: indigenousInterview.id,
      });

      await this.indigenousAlimentacaoNutricaoRepository.create({
        ...interview.alimentacao_nutricao,
        entrevista_indigena_id: indigenousInterview.id,
      });

      await this.indigenousApoioEProtecaoRepository.create({
        ...interview.apoio_e_protecao,
        entrevista_indigena_id: indigenousInterview.id,
      });
    });

    await Promise.all(interviewsToSave);
  }
}
