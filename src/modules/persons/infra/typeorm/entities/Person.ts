import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('persons')
class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  interviewer_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'interviewer_id' })
  interviewer: User;

  @Column()
  name: string;

  @Column()
  date_of_birth: Date;

  @Column()
  gender: string;

  @Column()
  race_color: string;

  @Column()
  religion: string;

  @Column()
  marital_status: string;

  @Column()
  literacy: boolean;

  @Column()
  education: string;

  @Column()
  work_status: string;

  @Column()
  health_conditions: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Person;
