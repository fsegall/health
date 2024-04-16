import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateIndigenousAlimentacaoV21711833826801
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns('alimentacao_nutricao_indigena_v2', [
      {
        oldColumn: new TableColumn({
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        }),
        newColumn: new TableColumn({
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'motivo_morador_nao_faz_horta',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'motivo_morador_nao_faz_horta',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'alimentos_da_horta',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'alimentos_da_horta',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'coleta_castanhas_cocos_frutas',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'coleta_castanhas_cocos_frutas',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'funcao_cultivo_horta',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'funcao_cultivo_horta',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'origem_semente_plantio',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'origem_semente_plantio',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'lista_dificuldades_com_horta',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'lista_dificuldades_com_horta',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'lista_animais_de_criacao_alimentacao_ou_venda',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'lista_animais_de_criacao_alimentacao_ou_venda',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'alimentos_consumidos_dia_anterior',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'alimentos_consumidos_dia_anterior',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
    ]);
  }

  public async down(): Promise<void> {}
}
