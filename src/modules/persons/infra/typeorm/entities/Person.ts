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
  literacy: string;

  @Column()
  education: string;

  @Column()
  work_status: string;

  @Column()
  covid_diagnose: string;

  @Column()
  unemployed: boolean;

  @Column()
  employed_normal_salary: boolean;

  @Column()
  employed_salary_reduced: boolean;

  @Column()
  employed_vacations: boolean;

  @Column()
  employed_on_leave_salary_reduced: boolean;

  @Column()
  employed_on_leave_normal_salary: boolean;

  @Column()
  employed_on_leave_no_salary: boolean;

  @Column()
  retired: boolean;

  @Column()
  self_employed_legally: boolean;

  @Column()
  odd_jobs: boolean;

  @Column()
  revenue: boolean;

  @Column()
  employer: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Person;
