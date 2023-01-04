import { ICreateIndigenousAlimentacaoNutricaoDTO } from './ICreateIndigenousAlimentacaoNutricaoDTO';
import { ICreateIndigenousApoioEProtecaoDTO } from './ICreateIndigenousApoioEProtecaoDTO';
import { ICreateIndigenousInterviewDemographyDTO } from './ICreateIndigenousInterviewDemographyDTO';
import { ICreateIndigenousInterviewDTO } from './ICreateIndigenousInterviewDTO';
import { ICreateIndigenousInterviewResidenceDTO } from './ICreateIndigenousInterviewResidenceDTO';
import { ICreateIndigenousSaudeDoencaDTO } from './ICreateIndigenousSaudeDoencaDTO';

export interface IHandleOfflineInterviewsDTO {
  interview: ICreateIndigenousInterviewDTO;
  demography: ICreateIndigenousInterviewDemographyDTO;
  residence: ICreateIndigenousInterviewResidenceDTO;
  saude_doenca: ICreateIndigenousSaudeDoencaDTO;
  alimentacao_nutricao: ICreateIndigenousAlimentacaoNutricaoDTO;
  apoio_e_protecao: ICreateIndigenousApoioEProtecaoDTO;
}
