export interface ICreateIndigeanousSaudeDoenca {
  id: string;

  entrevista_indigena_id: string;

  tomou_vacina_covid: string;

  motivo_nao_tomar_vacina_covid?: string;

  condicao_de_saude?: string;

  tekoha_mudou_condicao_de_saude?: string;

  morador_exposto_veneno_lavoura: string;

  doencas_contato_veneno_lavoura?: string;

  motivo_doencas_contato_veneno_lavoura?: string;

  acidentes: string;

  acidentes_ocorridos?: string;

  ocorrencia_de_ameacas: string;

  ocorrencia_violencia_fisica: string;

  local_ocorrencia_violencia_fisica?: string;

  lista_tratamentos?: string;

  tratamento_com_paje_ou_similar: string;

  tratamento_igreja: string;

  medicacao_uso_continuo: string;

  doenca_medicacao_uso_continuo?: string;

  primeiro_recurso_ao_notar_doenca: string;

  morador_internado: string;

  morador_problemas_bebidas_alcoolicas: string;

  morador_problemas_uso_drogas: string;

  familiar_morte_covid?: string;

  familiar_morte_covid_contribuia_renda_familiar?: string;

  familiares_morte_outras_causas?: string;

  motivo_familiares_morte_outras_causas?: string;

  familiares_morte_outras_causas_contribuia_renda_familiar?: string;
}
