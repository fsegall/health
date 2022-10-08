import { Column, Entity, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('apoio_financeiro_indigena')
export class IndigeanousApoioFinanceiro {
  @PrimaryColumn()
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @Column()
  morador_matriculado_na_educacao_basica_publica: string;

  @Column()
  quantidade_morador_matriculado_na_educacao_basica_publica?: number;

  @Column()
  criancas_comem_na_escola: string;

  @Column()
  escola_inclui_alimentos_da_cultura: string;

  @Column()
  morador_recebe_ajuda_financeira: string;

  @Column()
  bolsa_familia_auxilio_brasil?: string;

  @Column()
  bpc?: string;

  @Column()
  beneficio_deficientes_ou_idosos?: string;

  @Column()
  auxilio_maternidade?: string;

  @Column()
  auxilio_doenca?: string;

  @Column()
  auxilio_reclusao?: string;

  @Column()
  aposentadoria?: string;

  @Column()
  pensao_morte_conjuge?: string;

  @Column()
  pronaf?: string;

  @Column()
  auxilio_estadual_ou_municipal?: string;

  @Column()
  cesta_de_alimentos?: string;

  @Column()
  quantidade_cesta_de_alimentos_3m?: number;

  @Column()
  origem_cesta_de_alimentos_3m?: string[];

  @Column()
  alimentos_deveriam_estar_na_cesta_e_nao_estao?: string[];

  @Column()
  alimentos_que_nao_deveriam_estar_na_cesta?: string[];

  @Column()
  descricao_adicionar_outro?: string;

  @Column()
  descricao_remover_outro?: string;

  @Column()
  motivo_nao_recebe_cesta_de_alimentos?: string;

  @Column()
  quem_pega_dinheiro_bolsa_familia?: string;

  @Column()
  auxilio_emergencial_na_pandemia: string;

  @Column()
  quantidade_vezes_auxilio_emergencial_na_pandemia?: string;

  @Column()
  ajuda_estado_prefeitura_outros_3m: string;

  @Column()
  itens_recebidos_ajuda_estado_prefeitura_outros_3m?: string;

  @Column()
  vergonha_constrangimento_para_conseguir_alimentos_3m: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
