import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigeanousInterviewDemography1664318058700
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "create type basic_answers as enum ('sim', 'não', 'não_sei/não_respondeu')",
    );

    await queryRunner.createTable(
      new Table({
        name: 'indigeanous_demography',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'indigeanous_interview_id',
            type: 'uuid',
          },
          {
            name: 'total_residents',
            type: 'integer',
          },
          {
            name: 'residents',
            type: 'jsonb',
          },
          {
            name: 'worked_harvest',
            type: 'basic_answers',
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
            columnNames: ['indigeanous_interview_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'indigeanous_interviews',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('indigeanous_demography');
    await queryRunner.query('drop type basic_answers');
  }
}
