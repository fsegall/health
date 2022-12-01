import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

import { IMoradores } from '@modules/indiagenous/repositories/interfaces/ICreateIndigeanousInterviewDemography';

import { IndigeanousInterview } from './IndigeanousInterview';

@Entity('demografia_indigena')
export class IndigeanousDemography {
  @PrimaryColumn()
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @Column()
  total_moradores: number;

  @Column({ type: 'jsonb' })
  moradores: IMoradores[];

  @Column()
  trabalho_colheita_maca?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => IndigeanousInterview)
  @JoinColumn({ name: 'entrevista_indigena_id' })
  entrevista_indigena: IndigeanousInterview;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
