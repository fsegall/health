import { Column, Entity, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

import { IProgramasSociais } from '@modules/indigenous/v1/repositories/interfaces/ICreateIndigenousApoioEProtecao';

@Entity('apoio_protecao_indigena')
export class IndigenousApoioEProtecao {
  @PrimaryColumn()
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @Column()
  criancas_comem_escola: string;

  @Column()
  alimentacao_escolar_inclui_cultura: string;

  @Column()
  morador_recebe_ajuda_financeira: string;

  @Column({ type: 'json' })
  morador_recebe_programa_social: IProgramasSociais;

  @Column()
  recebeu_cesta_alimentos: string;

  @Column()
  recebeu_cesta_alimentos_que_alimentos_deveriam_ter: string;

  @Column()
  motivo_nao_recebe_cesta_alimentos: string;

  @Column()
  recebeu_ajuda_3m: string;

  @Column()
  o_que_recebeu_ajuda_3m: string;

  @Column()
  constrangimento_pedir_ajuda_alimentos_3m: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
