import { IProgramasSociais } from '../repositories/interfaces/ICreateIndigenousApoioEProtecao';

export class ICreateIndigenousApoioEProtecaoDTO {
  entrevista_indigena_id: string;

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
