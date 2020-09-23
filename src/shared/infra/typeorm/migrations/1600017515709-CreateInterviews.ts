import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateInterviews1600017515709 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'interviews',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'interviewer_id',
            type: 'varchar',
          },
          {
            name: 'project_name',
            type: 'varchar',
          },
          {
            name: 'project_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'person_id',
            type: 'varchar',
          },
          {
            name: 'household_id',
            type: 'varchar',
          },
          {
            name: 'address_id',
            type: 'varchar',
          },
          {
            name: 'is_complete',
            type: 'boolean',
          },
          {
            name: 'interview_type',
            type: 'varchar',
          },
          {
            name: 'comments',
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

    await queryRunner.createForeignKey(
      'interviews',
      new TableForeignKey({
        name: 'ProjectId',
        columnNames: ['project_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'projects',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('interviews', 'ProjectId');
    await queryRunner.dropTable('interviews');
  }

}
