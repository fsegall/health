import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IMoradores } from '@modules/indigenous/v2/dtos/ICreateIndigenousInterviewDemographyDTO';
import { IndigenousInterview } from './IndigenousInterview';

@Entity('demografia_indigena_v2')
export class IndigenousDemography {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @OneToOne(() => IndigenousInterview, (interview) => interview.entrevista_indigena_demografico)
  @JoinColumn({ name: 'entrevista_indigena_id' })
  entrevista_indigena: IndigenousInterview;

  @Column()
  total_moradores: number;

  @Column({ type: 'jsonb' })
  moradores: IMoradores[];

  @Column()
  morador_nao_indigena: string;

  @Column()
  quantidade_morador_nao_indigena: number;

  @Column('text', { array: true })
  povo_etnia?: string[];

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
}
