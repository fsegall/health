import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigenousInterviewDemography1664318058700
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'demografia_indigena',
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
            name: 'total_moradores',
            type: 'integer',
          },
          {
            name: 'moradores',
            type: 'jsonb',
          },
          {
            name: 'morador_trabalhou_fazendas',
            type: 'varchar',
          },
          {
            name: 'morador_trabalhou_catacao',
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
            name: 'FKIndigeanousDemographyInterview',
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
    await queryRunner.dropTable('demografia_indigena');
  }
}
