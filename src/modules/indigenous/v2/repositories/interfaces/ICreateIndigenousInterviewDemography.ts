export interface IMoradores {
  id: string;
  nome: string;
  relacao_com_lider?: string;
  data_nascimento?: string;
  idade: string | number;
  idade_em_meses?: string | number;
  maior_de_um_ano?: string;
  sexo: string;
}

export interface ICreateIndigenousInterviewDemography {
  entrevista_indigena_id: string;

  total_moradores: number;

  moradores: IMoradores[];

  morador_nao_indigena: string;

  quantidade_morador_nao_indigena: number;

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
