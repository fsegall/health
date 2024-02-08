import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { Discrimination } from '@modules/discriminations/infra/typeorm/entities/Discrimination';
import Household from '@modules/households/infra/typeorm/entities/Household';
import Person from '@modules/persons/infra/typeorm/entities/Person';
import Project from '@modules/projects/infra/typeorm/entities/Project';
import User from '@modules/users/infra/typeorm/entities/User';

import Address from '../../../../households/infra/typeorm/entities/Address';
import { InterviewLifeQualityMentalHealth } from './InterviewLifeQualityMentalHealth';

@Entity('interviews')
class Interview {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.interviews)
  @JoinColumn({ name: 'interviewer_id' })
  interviewer: User;

  @Column({ nullable: true })
  interviewer_id: string;

  @Column()
  project_name: string;

  @Column({ nullable: true })
  @Exclude()
  project_number: number;

  @Column()
  @Exclude()
  project_id: string;

  @ManyToOne(() => Project, project => project.interviews)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @OneToOne(() => Person, { nullable: true })
  @JoinColumn({ name: 'person_id' })
  person: Person;

  @Column({ nullable: true })
  @Exclude()
  person_id: string;

  @OneToOne(() => Household, { nullable: true })
  @JoinColumn({ name: 'household_id' })
  household: Household;

  @Column()
  @Exclude()
  household_id: string;

  @OneToOne(() => Address, { nullable: true })
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column()
  @Exclude()
  address_id: string;

  /*   @Column()
    family_member_id: string; */

  @Column()
  is_complete: boolean;

  @Column()
  is_complete_with_errors: boolean;

  @Column()
  interview_type: string;

  @Column()
  discrimination_id: string;

  @Column({ nullable: true })
  comments: string;

  @OneToOne(() => Discrimination, { nullable: true, eager: true })
  discrimination: Discrimination;

  @OneToOne(() => InterviewLifeQualityMentalHealth, { eager: true })
  mentalHealth: InterviewLifeQualityMentalHealth;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Interview;
