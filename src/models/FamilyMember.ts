import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Person from './Person';

@Entity('family_members')
class FamilyMember {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  person_id: string;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'person_id' })
  family_member: Person;

  @Column()
  gender: string;

  @Column()
  age: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default FamilyMember;
