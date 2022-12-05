export interface IMoradores {
  id: string;
  nome: string;
  relacao_com_lider: string;
  idade: number;
  sexo: string;
  indigena: string;
  povo_etnia: string;
  serie_frequentada_escola: string;
  crenca_religiao: string;
  ocupacao_principal: string;
  funcao_comunidade: string;
}

export interface ICreateIndigenousInterviewDemographyDTO {
  entrevista_indigena_id: string;
  total_moradores: number;
  moradores: IMoradores[];
  morador_trabalhou_fazendas: string;
  morador_trabalhou_catacao: string;
}
