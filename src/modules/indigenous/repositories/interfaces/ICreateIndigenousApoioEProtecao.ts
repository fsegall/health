export interface IProgramasSociais {
  bolsa_familia_auxilio_brasil: string;
  bpc: string;
  beneficio_deficientes_idosos: string;
  auxilio_maternidade: string;
  auxilio_doenca: string;
  auxilio_reclusao: string;
  aposentadoria: string;
  pensao_morte: string;
  pronaf: string;
  programa_auxilio_estadual_municipal: string;
  cesta_alimentos: string;
}

export interface ICreateIndigenousApoioEProtecao {
  criancas_comem_escola: string;

  alimentacao_escolar_inclui_cultura: string;

  morador_recebe_ajuda_financeira: string;

  morador_recebe_programa_social: IProgramasSociais;

  recebeu_cesta_alimentos: string;

  recebeu_cesta_alimentos_que_alimentos_deveriam_ter: string;

  motivo_nao_recebe_cesta_alimentos: string;

  recebeu_ajuda_3m: string;

  o_que_recebeu_ajuda_3m?: string;

  constrangimento_pedir_ajuda_alimentos_3m: string;
}
