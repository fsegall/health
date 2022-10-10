import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigeanousResidence1664836512384
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'domicilio_indigena',
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
            name: 'quantidade_comodos',
            type: 'integer',
          },
          {
            name: 'utensilios_casa',
            type: 'text',
          },
          {
            name: 'acesso_agua',
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
            type: 'text',
          },
          {
            name: 'veiculos',
            type: 'text',
          },
          {
            name: 'renda_total_30_dias',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'FKEntrevistaIndigenaResidencia',
            columnNames: ['entrevista_indigena_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'entrevistas_indigenas',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('domicilio_indigena');
  }
}
