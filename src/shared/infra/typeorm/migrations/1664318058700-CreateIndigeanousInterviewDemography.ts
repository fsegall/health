import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigeanousInterviewDemography1664318058700
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "create type basic_answers as enum ('sim', 'não', 'não_sei/não_respondeu')",
    );

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
            name: 'entrevistador_id',
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
            name: 'trabalho_colheita_maca',
            type: 'basic_answers',
            isNullable: true,
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
            columnNames: ['entrevistador_id'],
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
    await queryRunner.query('drop type basic_answers');
  }
}
