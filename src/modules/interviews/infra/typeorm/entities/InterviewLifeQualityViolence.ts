import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('qualidade_vida_violencia')
export class InterviewLifeQualityViolence {
  @PrimaryColumn()
  id: string;

  @Column()
  interview_id: string;

  @Column()
  violencia_psicologica: string;

  @Column()
  violencia_psicologica_onde_ocorreu: string;

  @Column()
  violencia_fisica: string;

  @Column()
  violencia_fisica_onde_ocorreu: string;

  @Column()
  violencia_sexual: string;

  @Column()
  violencia_sexual_onde_ocorreu: string;

  constructor() {
    if (!this.id) this.id = randomUUID();
  }
}
