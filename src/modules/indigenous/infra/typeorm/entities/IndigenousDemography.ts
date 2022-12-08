import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

import { IMoradores } from '@modules/indigenous/repositories/interfaces/ICreateIndigenousInterviewDemography';

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
  morador_trabalhou_fazendas: string;

  @Column()
  morador_trabalhou_catacao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
