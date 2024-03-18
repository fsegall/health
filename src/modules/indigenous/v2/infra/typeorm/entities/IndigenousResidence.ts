import { Column, Entity, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

import { IUtensiliosCasa } from '@modules/indigenous/v2/repositories/interfaces/ICreateIndigeanousInterviewResidence';

@Entity('domicilio_indigena')
export class IndigenousResidence {
  @PrimaryColumn()
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @Column()
  ultima_moradia: string;

  @Column()
  considera_moradia_adequada: string;

  @Column()
  tipo_moradia: string;

  @Column()
  piso: string;

  @Column()
  material_paredes: string;

  @Column()
  material_telhado: string;

  @Column()
  possui_energia_eletrica: number;

  @Column()
  utensilios_de_trabalho: number;

  @Column({ type: 'json' })
  utensilios_casa: IUtensiliosCasa;

  @Column()
  veiculos: string;

  @Column()
  origem_agua: string;

  @Column()
  qualidade_agua_para_beber_e_cozinhar: string;

  @Column()
  motivo_qualidade_ruim_agua_para_beber_e_cozinhar?: string;

  @Column()
  forma_acesso_agua: string;

  @Column()
  possui_banheiro: string;

  @Column()
  forma_coleta_esgoto: string;

  @Column()
  destino_lixo_da_residencia: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
