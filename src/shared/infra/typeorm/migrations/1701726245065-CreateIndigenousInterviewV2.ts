import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigenousInterviewV21701726245065
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'entrevistas_indigenas_v2',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'municipio',
            type: 'varchar',
          },
          {
            name: 'aldeia_comunidade',
            type: 'varchar',
          },
          {
            name: 'tipo_comunidade',
            type: 'varchar',
          },
          {
            name: 'entrevistador_id',
            type: 'uuid',
          },
          {
            name: 'projeto_numero',
            type: 'int',
          },
          {
            name: 'data_entrevista',
            type: 'timestamp',
          },
          {
            name: 'responsavel_documentos',
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
        foreignKeys: [
          {
            name: 'FKIndigeanousInterviewInterviewer',
            columnNames: ['entrevistador_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('entrevistas_indigenas_v2');
  }
}
