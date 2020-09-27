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

import User from '@modules/users/infra/typeorm/entities/User';
import Interview from '@modules/interviews/infra/typeorm/entities/Interview';

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

  @Column()
  name: string;

  @Column()
  project_number: number;

  @Column("text", { array: true })
  organizations: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Project;
