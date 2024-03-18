import { Column, Entity, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('apoio_protecao_indigena')
export class IndigenousApoioEProtecao {
  @PrimaryColumn()
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @Column()
  possui_crianca_ou_jovem_que_frequenta_escola: string;

  @Column()
  criancas_comem_escola?: string;

  @Column()
  alimentacao_escolar_inclui_cultura: string;

  @Column()
  renda_total_30_dias?: string;

  @Column()
  opcoes_renda_total_30_dias?: string;

  @Column()
  recebeu_cesta_alimentos?: string;

  @Column()
  motivo_nao_recebe_cesta_alimentos?: string;

  @Column()
  bolsa_familia_auxilio_brasil: string;

  @Column()
  valor_bolsa_familia_auxilio_brasil?: string;

  @Column()
  bpc: string;

  @Column()
  valor_bpc?: string;

  @Column()
  auxilio_maternidade: string;

  @Column()
  valor_auxilio_maternidade?: string;

  @Column()
  auxilio_doenca: string;

  @Column()
  valor_auxilio_doenca?: string;

  @Column()
  aposentadoria: string;

  @Column()
  valor_aposentadoria?: string;

  @Column()
  pensao_morte: string;

  @Column()
  valor_pensao_morte?: string;

  @Column()
  programa_auxilio_estadual_municipal: string;

  @Column()
  valor_programa_auxilio_estadual_municipal?: string;

  @Column()
  cesta_alimentos: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
