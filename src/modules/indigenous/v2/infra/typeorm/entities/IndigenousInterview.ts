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

import { IndigenousApoioEProtecao } from './IndigenousApoioEProtecao';
import { IndigenousDemography } from './IndigenousDemography';
import { IndigenousResidence } from './IndigenousResidence';

@Entity('entrevistas_indigenas_v2')
export class IndigenousInterview {
  @PrimaryColumn()
  id: string;

  @Column()
  municipio: string;

  @Column()
  aldeia_comunidade: string;

  @Column()
  tipo_comunidade: string;

  @Column()
  entrevistador_id: string;

  @Column()
  projeto_numero: string;

  @Column()
  data_entrevista: Date;

  @Column()
  responsavel_documentos: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'entrevistador_id' })
  entrevistador: User;

  @Column()
  project_id: string;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @OneToOne(() => IndigenousDemography)
  entrevista_indigena_demografico: IndigenousDemography;

  @OneToOne(() => IndigenousResidence)
  entrevista_indigena_domicilio: IndigenousResidence;

  @OneToOne(() => IndigenousApoioEProtecao)
  entrevista_indigena_apoio_financeiro: IndigenousApoioEProtecao;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
