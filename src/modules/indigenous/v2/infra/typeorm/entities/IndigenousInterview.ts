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

import { IndigenousAlimentacaoNutricao } from './IndigenousAlimentacaoNutricao';
import { IndigenousApoioEProtecao } from './IndigenousApoioEProtecao';
import { IndigenousDemography } from './IndigenousDemography';
import { IndigenousResidence } from './IndigenousResidence';
import { IndigeanousSaudeDoenca } from './IndigenousSaudeDoenca';

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

  @Column('text', { array: true })
  responsavel_documentos: string[];

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

  @OneToOne(() => IndigenousDemography, (demography) => demography.entrevista_indigena)
  entrevista_indigena_demografico: IndigenousDemography;

  @OneToOne(() => IndigenousResidence, (residence) => residence.entrevista_indigena)
  entrevista_indigena_domicilio: IndigenousResidence;

  @OneToOne(() => IndigeanousSaudeDoenca, (saudeDoenca) => saudeDoenca.entrevista_indigena)
  entrevista_indigena_saude_doenca: IndigeanousSaudeDoenca;

  @OneToOne(() => IndigenousAlimentacaoNutricao, (alimentacao) => alimentacao.entrevista_indigena)
  entrevista_indigena_alimentacao_nutricao: IndigenousAlimentacaoNutricao;

  @OneToOne(() => IndigenousApoioEProtecao, (apoio) => apoio.entrevista_indigena)
  entrevista_indigena_apoio_financeiro: IndigenousApoioEProtecao;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
