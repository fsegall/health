import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import Person from '@modules/persons/infra/typeorm/entities/Person';

@Entity('violences')
export class Violence {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  person_id: string;

  @Column()
  ofensa_humilhacao_ridicularizacao: string;

  @Column()
  ofensa_humilhacao_ridicularizacao_local: string;

  @Column()
  ofensa_humilhacao_ridicularizacao_local_outro: string;

  @Column()
  gritou_xingou: string;

  @Column()
  gritou_xingou_local: string;

  @Column()
  gritou_xingou_local_outro: string;

  @Column()
  ameacas_ofensas_exposicao_por_redes_sociais: string;

  @Column()
  ameacas_ofensas_exposicao_por_redes_sociais_local: string;

  @Column()
  ameacas_ofensas_exposicao_por_redes_sociais_local_outro: string;

  @Column()
  ameacas_verbais: string;

  @Column()
  ameacas_verbais_local: string;

  @Column()
  ameacas_verbais_local_outro: string;

  @Column()
  destruiu_pertences_de_proposito: string;

  @Column()
  destruiu_pertences_de_proposito_local: string;

  @Column()
  destruiu_pertences_de_proposito_local_outro: string;

  @Column()
  tapa_bofetada: string;

  @Column()
  tapa_bofetada_local: string;

  @Column()
  tapa_bofetada_local_outro: string;

  @Column()
  empurrou_segurou_ou_jogou_algo_com_intencao_de_machucar: string;

  @Column()
  empurrou_segurou_ou_jogou_algo_com_intencao_de_machucar_local: string;

  @Column()
  empurrou_segurou_ou_jogou_algo_com_intencao_de_machucar_local_outro: string;

  @Column()
  soco_chute_ou_arrastou_pelo_cabelo: string;

  @Column()
  soco_chute_ou_arrastou_pelo_cabelo_local: string;

  @Column()
  soco_chute_ou_arrastou_pelo_cabelo_local_outro: string;

  @Column()
  tentou_ou_estrangulou_asfixiou_ou_queimou: string;

  @Column()
  tentou_ou_estrangulou_asfixiou_ou_queimou_local: string;

  @Column()
  tentou_ou_estrangulou_asfixiou_ou_queimou_local_outro: string;

  @Column()
  ameacou_ou_feriu_com_faca_arma_ou_outros_objetos: string;

  @Column()
  ameacou_ou_feriu_com_faca_arma_ou_outros_objetos_local: string;

  @Column()
  ameacou_ou_feriu_com_faca_arma_ou_outros_objetos_local_outro: string;

  @Column()
  tocou_manipulou_beijou_expos_corpo_contra_vontade: string;

  @Column()
  tocou_manipulou_beijou_expos_corpo_contra_vontade_local: string;

  @Column()
  tocou_manipulou_beijou_expos_corpo_contra_vontade_local_outro: string;

  @Column()
  ameacou_forcou_relacoes_ou_atos_sexuais_contra_vontade: string;

  @Column()
  ameacou_forcou_relacoes_ou_atos_sexuais_contra_vontade_local: string;

  @Column()
  ameacou_forcou_relacoes_ou_atos_sexuais_contra_vontade_local_outro: string;

  @OneToOne(() => Person)
  person: Person;
}
