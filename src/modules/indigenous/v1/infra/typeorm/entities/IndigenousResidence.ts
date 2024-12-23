import { Column, Entity, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

import { IUtensiliosCasa } from '@modules/indigenous/v1/repositories/interfaces/ICreateIndigeanousInterviewResidence';

@Entity('domicilio_indigena')
export class IndigenousResidence {
  @PrimaryColumn()
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @Column()
  ultima_moradia: string;

  @Column()
  tipo_moradia: string;

  @Column()
  piso: string;

  @Column()
  material_paredes: string;

  @Column()
  material_telhado: string;

  @Column()
  quantidade_comodos: number;

  @Column({ type: 'json' })
  utensilios_casa: IUtensiliosCasa;

  @Column()
  acesso_agua: string;

  @Column()
  origem_agua: string;

  @Column()
  qualidade_agua_para_beber_e_cozinhar: string;

  @Column()
  forma_acesso_agua: string;

  @Column()
  possui_banheiro: string;

  @Column()
  forma_coleta_esgoto: string;

  @Column()
  destino_lixo_da_residencia: string;

  @Column()
  veiculos: string;

  @Column()
  renda_total_30_dias: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
