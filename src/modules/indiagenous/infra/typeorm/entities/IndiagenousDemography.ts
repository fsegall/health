import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

import { BasicAnswers } from '@modules/indiagenous/enums';
import { IResidents } from '@modules/indiagenous/repositories/interfaces/ICreateIndigeanousInterviewDemography';

@Entity('indigeanous_demography')
export class IndigeanousDemography {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'indigeanous_interview_id' })
  indigeanousInterviewId: string;

  @Column({ name: 'total_residents' })
  totalResidents: number;

  @Column()
  residents: IResidents[];

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
