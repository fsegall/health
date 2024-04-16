import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('apoio_protecao_indigena_v2')
export class IndigenousApoioEProtecao {
  @PrimaryGeneratedColumn('uuid')
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

  @Column('text', { array: true })
  recebeu_cesta_alimentos?: string[];

  @Column()
  motivo_nao_recebe_cesta_alimentos?: string;

  @Column()
  bolsa_familia_auxilio_brasil: string;

  @Column()
  valor_bolsa_familia_auxilio_brasil?: number;

  @Column()
  bpc: string;

  @Column()
  valor_bpc?: number;

  @Column()
  auxilio_maternidade: string;

  @Column()
  valor_auxilio_maternidade?: number;

  @Column()
  auxilio_doenca: string;

  @Column()
  valor_auxilio_doenca?: number;

  @Column()
  aposentadoria: string;

  @Column()
  valor_aposentadoria?: number;

  @Column()
  pensao_morte: string;

  @Column()
  valor_pensao_morte?: number;

  @Column()
  programa_auxilio_estadual_municipal: string;

  @Column()
  valor_programa_auxilio_estadual_municipal?: number;

  @Column()
  cesta_alimentos: string;
}
