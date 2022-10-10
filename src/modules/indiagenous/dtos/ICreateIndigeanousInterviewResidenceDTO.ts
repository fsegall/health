export interface ICreateIndigeanousInterviewResidenceDTO {
  entrevista_indigena_id: string;

  ultima_moradia: string;

  piso: string;

  material_paredes: string;

  material_telhado: string;

  quantidade_comodos: number;

  utensilios_casa: string[];

  acesso_agua: string;

  origem_agua: string;

  qualidade_agua_para_beber_e_cozinhar: string;

  forma_acesso_agua: string;

  possui_banheiro: string;

  forma_coleta_esgoto: string;

  destino_lixo_da_residencia: string[];

  veiculos: string[];

  renda_total_30_dias: string;
}
