import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigenousResidenceV21701727343999
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'domicilio_indigena_v2',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'entrevista_indigena_id',
            type: 'uuid',
          },
          {
            name: 'ultima_moradia',
            type: 'varchar',
          },
          {
            name: 'considera_moradia_adequada',
            type: 'varchar',
          },
          {
            name: 'tipo_moradia',
            type: 'varchar',
          },
          {
            name: 'piso',
            type: 'varchar',
          },
          {
            name: 'material_paredes',
            type: 'varchar',
          },
          {
            name: 'material_telhado',
            type: 'varchar',
          },
          {
            name: 'possui_energia_eletrica',
            type: 'varchar',
          },
          {
            name: 'utensilios_casa',
            type: 'varchar',
          },
          {
            name: 'utensilios_de_trabalho',
            type: 'varchar',
          },
          {
            name: 'veiculos',
            type: 'varchar',
          },
          {
            name: 'origem_agua',
            type: 'varchar',
          },
          {
            name: 'qualidade_agua_para_beber_e_cozinhar',
            type: 'varchar',
          },
          {
            name: 'motivo_qualidade_ruim_agua_para_beber_e_cozinhar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'forma_acesso_agua',
            type: 'varchar',
          },
          {
            name: 'possui_banheiro',
            type: 'varchar',
          },
          {
            name: 'forma_coleta_esgoto',
            type: 'varchar',
          },
          {
            name: 'destino_lixo_da_residencia',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'FKEntrevistaIndigenaResidencia',
            columnNames: ['entrevista_indigena_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'entrevistas_indigenas_v2',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('domicilio_indigena_v2');
  }
}
