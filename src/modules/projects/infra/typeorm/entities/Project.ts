import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import { IndigenousInterview } from '@modules/indigenous/v2/infra/typeorm/entities/IndigenousInterview';
import Interview from '@modules/interviews/infra/typeorm/entities/Interview';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('projects')
class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  interviewer: User;

  @OneToMany(() => Interview, interview => interview.project)
  interviews: Interview[];

  @OneToMany(() => IndigenousInterview, interview => interview.project)
  indigenous_interviews: IndigenousInterview[];

  @Column()
  name: string;

  @Column()
  project_number: number;

  @Column('text', { array: true, nullable: true })
  organizations: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Project;
