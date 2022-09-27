import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigeanousInterview1664316540939
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'indigeanous_interviews',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'comunity',
            type: 'varchar',
          },
          {
            name: 'land',
            type: 'varchar',
          },
          {
            name: 'area',
            type: 'integer',
          },
          {
            name: 'camp_name',
            type: 'varchar',
          },
          {
            name: 'interviewer_id',
            type: 'uuid',
          },
          {
            name: 'project_id',
            type: 'uuid',
          },
          {
            name: 'date',
            type: 'timestamp',
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
            columnNames: ['project_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'projects',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKIndigeanousInterviewInterviewer',
            columnNames: ['interviewer_id'],
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
