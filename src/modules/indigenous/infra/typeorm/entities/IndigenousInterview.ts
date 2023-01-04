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
import { IndigenousResidence } from './IndigenousResidence';
import { IndigenousDemography } from './IndigenousDemography';

@Entity('entrevistas_indigenas')
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
  projeto_id: string;

  @Column()
  data_entrevista: Date;

  @Column()
  responsavel_domicilio: boolean;

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
