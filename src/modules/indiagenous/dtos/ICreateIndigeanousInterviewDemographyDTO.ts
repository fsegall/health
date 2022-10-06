import { BasicAnswers } from '@modules/indiagenous/enums';

export interface IMoradores {
  id: string;
  nome: string;
  relacao_com_chefe: string;
  idade: number;
  sexo: string;
  povo_etnia: string;
  raca: string;
  lingua_indigena: string;
  // speakPortuguese: boolean;
  // readOrWritePortuguese: boolean;
  crenca_religiao?: string;
  frequena_escolha: boolean;
  grau_escolaridade: string;
  situacao_no_trabalho?: string;
  ocupacao_profissao?: string;
  funcao_na_comunidade?: string;
}

export interface ICreateIndigeanousInterviewDemographyDTO {
  entrevista_indigena_id: string;
  total_moradores: number;
  moradores: IMoradores[];
  trabalho_colheita_maca?: BasicAnswers;
}
