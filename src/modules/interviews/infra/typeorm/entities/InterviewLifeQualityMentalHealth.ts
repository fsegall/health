import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('qualidade_vida_saude_mental_estresse')
export class InterviewLifeQualityMentalHealth {
  @PrimaryColumn()
  id: string;

  @Column()
  interview_id: string;

  @Column()
  sente_nervoso_tenso_preocupado: string;

  @Column()
  assusta_com_facilidade: string;

  @Column()
  sente_triste: string;

  @Column()
  chora_mais_do_que_costume: string;

  @Column()
  dores_de_cabeca_frequente: string;

  @Column()
  dorme_mal: string;

  @Column()
  desconforto_estomacal: string;

  @Column()
  ma_digestao: string;

  @Column()
  falta_de_apetite: string;

  @Column()
  tremores_maos: string;

  @Column()
  cansa_com_facilidade: string;

  @Column()
  dificuldade_tomar_decisao: string;

  @Column()
  dificuldade_satisfacao_tarefas: string;

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
  dar_fim_a_vida: string;

  @Column()
  sente_inutil: string;

  constructor() {
    if (!this.id) this.id = randomUUID();
  }
}
