export class ICreateIndigenousApoioEProtecaoDTO {
  entrevista_indigena_id: string;

  possui_crianca_ou_jovem_que_frequenta_escola: string;

  criancas_comem_escola?: string;

  alimentacao_escolar_inclui_cultura: string;

  renda_total_30_dias?: string;

  opcoes_renda_total_30_dias?: string;

  recebeu_cesta_alimentos?: string[];

  motivo_nao_recebe_cesta_alimentos?: string;

  bolsa_familia_auxilio_brasil: string;

  valor_bolsa_familia_auxilio_brasil?: number;

  bpc: string;

  valor_bpc?: number;

  auxilio_maternidade: string;

  valor_auxilio_maternidade?: number;

  auxilio_doenca: string;

  valor_auxilio_doenca?: number;

  aposentadoria: string;

  valor_aposentadoria?: number;

  pensao_morte: string;

  valor_pensao_morte?: number;

  programa_auxilio_estadual_municipal: string;

  valor_programa_auxilio_estadual_municipal?: number;

  cesta_alimentos: string;
}
