import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Household from './Household';

@Entity('addresses')
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  household_id: string;

  @OneToOne(() => Household)
  @JoinColumn({ name: 'household_id' })
  household: Household;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  post_code: string;

  @Column()
  neighborhood: string;

  @Column()
  street_or_location: string;

  @Column()
  house_number: number;

  @Column()
  telephone_number: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Address;
