import { ICreateIndigenousAlimentacaoNutricaoDTO } from './ICreateIndigenousAlimentacaoNutricaoDTO';
import { ICreateIndigenousApoioEProtecaoDTO } from './ICreateIndigenousApoioEProtecaoDTO';
import { ICreateIndigenousInterviewDemographyDTO } from './ICreateIndigenousInterviewDemographyDTO';
import { ICreateIndigenousInterviewDTO } from './ICreateIndigenousInterviewDTO';
import { ICreateIndigenousInterviewResidenceDTO } from './ICreateIndigenousInterviewResidenceDTO';
import { ICreateIndigenousSaudeDoencaDTO } from './ICreateIndigenousSaudeDoencaDTO';

export interface IHandleOfflineInterviewsDTO {
  indigenous_informacoes_basicas: ICreateIndigenousInterviewDTO;
  indigenous_demografico: ICreateIndigenousInterviewDemographyDTO;
  indigenous_domicilio: ICreateIndigenousInterviewResidenceDTO;
  indigenous_saude_doenca: ICreateIndigenousSaudeDoencaDTO;
  indigenous_alimentacao_nutricao: ICreateIndigenousAlimentacaoNutricaoDTO;
  indigenous_apoio_protecao_social: ICreateIndigenousApoioEProtecaoDTO;
}
