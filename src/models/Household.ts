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

@Entity('households')
class Household {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  person_id: string;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'person_id' })
  household: Person;

  @Column()
  household_main_person: boolean;

  @Column()
  relationship_to_main_person: string;

  @Column()
  location_of_residence: string;

  @Column()
  type_of_residence: string;

  @Column()
  number_of_rooms: number;

  @Column()
  number_of_people_household: number;

  @Column()
  family_income: number;

  @Column()
  drinking_water: string;

  @Column()
  bathroom_inside_house: boolean;

  @Column()
  garbage_service: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Household;
