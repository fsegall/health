import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('persons')
class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  interviewer_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'interviewer_id' })
  interviewer: User;

  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column()
  sexo: string;

  @Column()
  raca_cor: string;

  @Column()
  ler_escrever: string;

  @Column()
  escolaridade: string;

  @Column()
  situacao_de_trabalho: string;

  @Column()
  ocupacao: string;

  @Column()
  local_de_trabalho: string;

  @Column()
  diagnostico_covid: string;

  @Column()
  vacina: string;

  @Column()
  nao_tomou_vacina: string;

  @Column()
  estado_de_saude: string;

  @Column('text', { array: true })
  local_de_procura_do_servico_de_saude: string[];

  @Column('text', { array: true })
  motivo_procura_servico_saude: string[];

  @Column('text', { array: true })
  motivo_nao_atendimento_servico_saude: string[];

  @Column('text', { array: true })
  doenca_ultimos_12_meses: string[];

  @Column('text', { array: true })
  diagnostico_doenca_ultimos_12_meses: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Person;
