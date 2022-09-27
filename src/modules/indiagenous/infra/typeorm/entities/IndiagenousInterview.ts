import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

import Interview from '@modules/interviews/infra/typeorm/entities/Interview';
import Project from '@modules/projects/infra/typeorm/entities/Project';

@Entity('indigeanous_interviews')
export class IndigeanousInterview {
  @PrimaryColumn()
  id: string;

  @Column()
  city: string;

  @Column()
  comunity: string;

  @Column()
  land: string;

  @Column()
  area: number;

  @Column({ name: 'camp_name' })
  campName: string;

  @Column({ name: 'interviewer_id' })
  interviewerId: string;

  @Column({ name: 'project_id' })
  projectId: string;

  @Column()
  date: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Interview)
  interview: Interview;

  @ManyToOne(() => Project)
  project: Project;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
