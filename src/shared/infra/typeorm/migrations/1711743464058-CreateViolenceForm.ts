import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateViolenceForm1711743464058 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'violences',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'person_id',
            type: 'varchar',
          },
          { name: 'ofensa_humilhacao_ridicularizacao', type: 'varchar' },
          { name: 'ofensa_humilhacao_ridicularizacao_local', type: 'varchar' },
          {
            name: 'ofensa_humilhacao_ridicularizacao_local_outro',
            type: 'varchar',
          },
          { name: 'gritou_xingou', type: 'varchar' },
          { name: 'gritou_xingou_local', type: 'varchar' },
          { name: 'gritou_xingou_local_outro', type: 'varchar' },
          {
            name: 'ameacas_ofensas_exposicao_por_redes_sociais',
            type: 'varchar',
          },
          {
            name: 'ameacas_ofensas_exposicao_por_redes_sociais_local',
            type: 'varchar',
          },
          {
            name: 'ameacas_ofensas_exposicao_por_redes_sociais_local_outro',
            type: 'varchar',
          },
          { name: 'ameacas_verbais', type: 'varchar' },
          { name: 'ameacas_verbais_local', type: 'varchar' },
          { name: 'ameacas_verbais_local_outro', type: 'varchar' },
          { name: 'destruiu_pertences_de_proposito', type: 'varchar' },
          { name: 'destruiu_pertences_de_proposito_local', type: 'varchar' },
          {
            name: 'destruiu_pertences_de_proposito_local_outro',
            type: 'varchar',
          },
          { name: 'tapa_bofetada', type: 'varchar' },
          { name: 'tapa_bofetada_local', type: 'varchar' },
          { name: 'tapa_bofetada_local_outro', type: 'varchar' },
          {
            name: 'empurrou_segurou_ou_jogou_algo_com_intencao_de_machucar',
            type: 'varchar',
          },
          {
            name: 'empurrou_segurou_ou_jogou_algo_com_intencao_de_machucar_local',
            type: 'varchar',
          },
          {
            name: 'empurrou_segurou_ou_jogou_algo_com_intencao_de_machucar_local_outro',
            type: 'varchar',
          },
          { name: 'soco_chute_ou_arrastou_pelo_cabelo', type: 'varchar' },
          { name: 'soco_chute_ou_arrastou_pelo_cabelo_local', type: 'varchar' },
          {
            name: 'soco_chute_ou_arrastou_pelo_cabelo_local_outro',
            type: 'varchar',
          },
          {
            name: 'tentou_ou_estrangulou_asfixiou_ou_queimou',
            type: 'varchar',
          },
          {
            name: 'tentou_ou_estrangulou_asfixiou_ou_queimou_local',
            type: 'varchar',
          },
          {
            name: 'tentou_ou_estrangulou_asfixiou_ou_queimou_local_outro',
            type: 'varchar',
          },
          {
            name: 'ameacou_ou_feriu_com_faca_arma_ou_outros_objetos',
            type: 'varchar',
          },
          {
            name: 'ameacou_ou_feriu_com_faca_arma_ou_outros_objetos_local',
            type: 'varchar',
          },
          {
            name: 'ameacou_ou_feriu_com_faca_arma_ou_outros_objetos_local_outro',
            type: 'varchar',
          },
          {
            name: 'tocou_manipulou_beijou_expos_corpo_contra_vontade',
            type: 'varchar',
          },
          {
            name: 'tocou_manipulou_beijou_expos_corpo_contra_vontade_local',
            type: 'varchar',
          },
          {
            name: 'tocou_manipulou_beijou_expos_corpo_contra_vontade_local_outro',
            type: 'varchar',
          },
          {
            name: 'ameacou_forcou_relacoes_ou_atos_sexuais_contra_vontade',
            type: 'varchar',
          },
          {
            name: 'ameacou_forcou_relacoes_ou_atos_sexuais_contra_vontade_local',
            type: 'varchar',
          },
          {
            name: 'ameacou_forcou_relacoes_ou_atos_sexuais_contra_vontade_local_outro',
            type: 'varchar',
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('violences');
  }
}
