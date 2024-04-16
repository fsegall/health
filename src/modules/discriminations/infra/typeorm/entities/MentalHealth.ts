import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import Person from '@modules/persons/infra/typeorm/entities/Person';

@Entity('mental_healths')
export class MentalHealth {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  person_id: string;

  @Column()
  nervoso_tenso_preocupado: string;

  @Column()
  facilidade_assustar: string;

  @Column()
  sentimento_tristeza: string;

  @Column()
  chora_mais_que_de_costume: string;

  @Column()
  dor_de_cabeca_frequente: string;

  @Column()
  dorme_mal: string;

  @Column()
  desconforto_estomacal: string;

  @Column()
  ma_digestao: string;

  @Column()
  falta_de_apetite: string;

  @Column()
  tremores_nas_maos: string;

  @Column()
  cansa_com_facilidade: string;

  @Column()
  dificuldade_tomada_de_decisao: string;

  @Column()
  dificuldade_satisfacao_em_tarefas: string;

  @Column()
  trabalho_traz_sofrimento: string;

  @Column()
  cansado_tempo_todo: string;

  @Column()
  dificuldade_pensar_claramente: string;

  @Column()
  incapaz_desempenhar_papel_util: string;

  @Column()
  perdeu_interesse_pelas_coisas: string;

  @Column()
  pensado_dar_fim_na_vida: string;

  @Column()
  sentimento_inutilidade_em_sua_vida: string;

  @OneToOne(() => Person)
  person: Person;
}
