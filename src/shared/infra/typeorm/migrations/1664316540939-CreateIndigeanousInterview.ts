import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigeanousInterview1664316540939
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'entrevistas_indigenas',
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
            name: 'terra_indigena',
            type: 'varchar',
          },
          {
            name: 'area_retomada',
            type: 'varchar',
          },
          {
            name: 'acampamento',
            type: 'varchar',
          },
          {
            name: 'entrevistador_id',
            type: 'uuid',
          },
          {
            name: 'projeto_id',
            type: 'uuid',
          },
          {
            name: 'data_entrevista',
            type: 'timestamp',
          },
          {
            name: 'primeiro_contato_responsavel',
            type: 'boolean',
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
            name: 'FKIndigeanousInterviewProject',
            columnNames: ['projeto_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'projects',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
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
    await queryRunner.dropTable('indigeanous_interviews');
  }
}
