import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('domicilio_indigena_v2')
export class IndigenousResidence {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @Column()
  ultima_moradia: string;

  @Column()
  considera_moradia_adequada: string;

  @Column('text', { array: true })
  tipo_moradia: string[];

  @Column()
  piso: string;

  @Column()
  material_paredes: string;

  @Column()
  material_telhado: string;

  @Column()
  possui_energia_eletrica: string;

  @Column('text', { array: true })
  utensilios_de_trabalho: string[];

  @Column('text', { array: true })
  utensilios_casa: string[];

  @Column('text', { array: true })
  veiculos: string[];

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

  @Column({
    type: 'text',
    array: true,
  })
  forma_coleta_esgoto: string[];

  @Column('text', { array: true })
  destino_lixo_da_residencia: string[];
}
