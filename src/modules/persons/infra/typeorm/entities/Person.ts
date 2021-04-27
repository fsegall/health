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
  age: number;

  @Column()
  gender: string;

  @Column()
  race_color: string;

  @Column()
  literacy: string;

  @Column()
  education: string;

  @Column()
  work_status: string;

  @Column()
  work_shift_reduction: string;

  @Column()
  covid_diagnose: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Person;
