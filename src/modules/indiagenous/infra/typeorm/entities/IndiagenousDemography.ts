import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

import { BasicAnswers } from '@modules/indiagenous/enums';

@Entity('indigeanous_demography')
export class IndigeanousDemography {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'indigeanous_interview_id' })
  indigeanousInterviewId: string;

  @Column({ name: 'total_residents' })
  totalResidents: number;

  @Column()
  residents: string;

  @Column({ name: 'worked_harvest' })
  workedHarvest: BasicAnswers;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
