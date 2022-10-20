import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { uuid } from 'uuidv4';

import Project from '@modules/projects/infra/typeorm/entities/Project';
import User from '@modules/users/infra/typeorm/entities/User';

import { IndigeanousDemography } from './IndiagenousDemography';
import { IndigeanousApoio } from './IndigeanousApoio';
import { IndigeanousResidence } from './IndigeanousResidence';

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
  @JoinColumn({ name: 'entrevistador_id' })
  entrevistador: User;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'projeto_id' })
  projeto: Project;

  @OneToOne(() => IndigeanousDemography)
  entrevista_indigena_demografico: IndigeanousDemography;

  @OneToOne(() => IndigeanousResidence)
  entrevista_indigena_domicilio: IndigeanousResidence;

  @OneToOne(() => IndigeanousApoio)
  entrevista_indigena_apoio_financeiro: IndigeanousApoio;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
