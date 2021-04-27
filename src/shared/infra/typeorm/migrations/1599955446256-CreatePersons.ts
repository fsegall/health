import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreatePersons1599955446256 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'persons',
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
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'age',
            type: 'integer',
          },
          {
            name: 'gender',
            type: 'varchar',
          },
          {
            name: 'race_color',
            type: 'varchar',
          },
          {
            name: 'literacy',
            type: 'varchar',
          },
          {
            name: 'education',
            type: 'varchar',
          },
          {
            name: 'work_status',
            type: 'varchar',
          },
          {
            name: 'work_shift_reduction',
            type: 'varchar',
          },
          {
            name: 'covid_diagnose',
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
      'persons',
      new TableForeignKey({
        name: 'Interviewer',
        columnNames: ['interviewer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('persons', 'Interviewer');
    await queryRunner.dropTable('persons');
  }

}
