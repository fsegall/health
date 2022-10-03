import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

import Project from '@modules/projects/infra/typeorm/entities/Project';
import User from '@modules/users/infra/typeorm/entities/User';

import { IndigeanousDemography } from './IndiagenousDemography';

@Entity('entrevistas_indigenas')
export class IndigeanousInterview {
  @PrimaryColumn()
  id: string;

  @Column()
  municipio: string;

  @Column()
  aldeia_comunidade: string;

  @Column()
  terra_indigena: string;

  @Column()
  area_retomada: number;

  @Column()
  acampamento: string;

  @Column()
  entrevistador_id: string;

  @Column()
  projeto_id: string;

  @Column()
  data_entrevista: Date;

  @Column()
  primeiro_contato_responsavel: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @ManyToOne(() => User)
  entrevistador: User;

  @ManyToOne(() => Project)
  projeto: Project;

  @OneToOne(() => IndigeanousDemography)
  entrevista_indigena: IndigeanousDemography;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
