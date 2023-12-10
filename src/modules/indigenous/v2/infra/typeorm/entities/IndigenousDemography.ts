import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

import { IMoradores } from '@modules/indigenous/v2/dtos/ICreateIndigenousInterviewDemographyDTO';

@Entity('demografia_indigena')
export class IndigenousDemography {
  @PrimaryColumn()
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @Column()
  total_moradores: number;

  @Column({ type: 'jsonb' })
  moradores: IMoradores[];

  @Column()
  morador_nao_indigena: string;

  @Column()
  quantidade_morador_nao_indigena: number;

  @Column()
  povo_etnia?: string;

  @Column()
  serie_frequentada_escola: string;

  @Column()
  crenca_religiao: string;

  @Column()
  crenca_religiao_igreja?: string;

  @Column()
  situacao_no_trabalho?: string;

  @Column()
  remuneracao_trabalho_na_aldeia?: string;

  @Column()
  funcao_trabalho_remunerado_na_aldeia?: string;

  @Column()
  remuneracao_trabalho_fora_aldeia?: string;

  @Column()
  funcao_trabalho_remunerado_fora_da_aldeia?: string;

  @Column()
  funcao_nao_remunerada_aldeia: string;

  @Column()
  motivo_nao_trabalha: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
