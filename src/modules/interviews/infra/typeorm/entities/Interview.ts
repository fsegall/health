import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Project from '@modules/projects/infra/typeorm/entities/Project';

@Entity('interviews')
class Interview {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  interviewer_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'interviewer_id' })
  interviewer: User;

  @Column()
  project_name: string;

  @Column()
  project_id: string;

  @ManyToOne(() => Project, project => project.interviews)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @Column()
  person_id: string;

  @Column()
  household_id: string;

  @Column()
  address_id: string;

  @Column()
  family_member_id: string;

  @Column()
  is_complete: boolean;

  @Column()
  interview_type: string;

  @Column()
  comments: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Interview;
