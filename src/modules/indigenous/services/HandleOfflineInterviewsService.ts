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
    console.log("data", data);
    const interviewsToSave = data.map(async interview => {
      console.log("indigenous_informacoes_basicas", interview.indigenous_informacoes_basicas)
      const indigenousInterview = await this.indigenousInterviewRepository.create(
        interview.indigenous_informacoes_basicas,
      );

      await this.indigenousInterviewDemographyRepository.create({
        ...interview.indigenous_demografico,
        entrevista_indigena_id: indigenousInterview.id,
      });

      await this.indigeanousInterviewResidenceRepository.create({
        ...interview.indigenous_domicilio,
        veiculos: interview.indigenous_domicilio.veiculos.toString(),
        destino_lixo_da_residencia: interview.indigenous_domicilio.destino_lixo_da_residencia.toString(),
        entrevista_indigena_id: indigenousInterview.id,
      });

      await this.indigeanousSaudeDoencaRepository.create({
        ...interview.indigenous_saude_doenca,
        entrevista_indigena_id: indigenousInterview.id,
      });

      await this.indigenousAlimentacaoNutricaoRepository.create({
        ...interview.indigenous_alimentacao_nutricao,
        entrevista_indigena_id: indigenousInterview.id,
      });

      await this.indigenousApoioEProtecaoRepository.create({
        ...interview.indigenous_apoio_protecao_social,
        entrevista_indigena_id: indigenousInterview.id,
      });
    });

    await Promise.all(interviewsToSave);
  }
}
