export interface IUtensiliosCasa {
  energia_eletrica: boolean;
  televisao: boolean;
  geladeira: boolean;
  fogao_a_gas: boolean;
  maquina_de_lavar_ou_tanquinho: boolean;
  computador_ou_tablet_ou_laptop: boolean;
  celular_com_internet: boolean;
  celular_sem_internet: boolean;
  trator_ou_rocadeira_para_lavoura: boolean;
  radio: boolean;
}

export interface ICreateIndigenousInterviewResidence {
  entrevista_indigena_id: string;

  ultima_moradia: string;

  tipo_moradia: string;

  piso: string;

  material_paredes: string;

  material_telhado: string;

  quantidade_comodos: number;

  utensilios_casa: IUtensiliosCasa;

  acesso_agua: string;

  origem_agua: string;

  qualidade_agua_para_beber_e_cozinhar: string;

  forma_acesso_agua: string;

  possui_banheiro: string;

  forma_coleta_esgoto: string;

  destino_lixo_da_residencia: string;

  veiculos: string;

  renda_total_30_dias: string;
}
