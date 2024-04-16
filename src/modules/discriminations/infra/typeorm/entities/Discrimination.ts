import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import Person from '@modules/persons/infra/typeorm/entities/Person';

@Entity('discriminations')
export class Discrimination {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  person_id: string;

  @Column()
  razao_discriminacao: string;

  @Column()
  seguido_ou_observado: string;

  @Column()
  ameacado_ou_assediado: string;

  @Column()
  xingamentos: string;

  @Column()
  agir_como_se_fossem_melhor_que_voce: string;

  @Column()
  honestidade: string;

  @Column()
  medo: string;

  @Column()
  inteligencia: string;

  @Column()
  atendimento: string;

  @Column()
  respeito: string;

  @Column()
  gentileza: string;

  @OneToOne(() => Person)
  person: Person;
}
