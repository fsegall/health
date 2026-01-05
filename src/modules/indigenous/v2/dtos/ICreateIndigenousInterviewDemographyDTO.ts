export interface IMoradores {
  id: string;
  nome: string;
  relacao_com_lider?: string;
  data_nascimento?: string;
  idade: number | string;
  idade_em_meses?: number | string;
  maior_de_um_ano?: string;
  sexo: string;
}

export interface ICreateIndigenousInterviewDemographyDTO {
  entrevista_indigena_id: string;

  total_moradores: number;

  moradores: IMoradores[];

  morador_nao_indigena: string;

  quantidade_morador_nao_indigena: number | string;

  povo_etnia?: string[];

  serie_frequentada_escola: string;

  crenca_religiao: string;

  crenca_religiao_igreja?: string;

  situacao_no_trabalho?: string[];

  remuneracao_trabalho_na_aldeia?: string;

  funcao_trabalho_remunerado_na_aldeia?: string;

  remuneracao_trabalho_fora_aldeia?: string;

  funcao_trabalho_remunerado_fora_da_aldeia?: string;

  funcao_nao_remunerada_aldeia: string;

  motivo_nao_trabalha: string;
}
