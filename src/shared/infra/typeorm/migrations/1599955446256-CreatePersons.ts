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
            name: 'date_of_birth',
            type: 'date',
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
            name: 'unemployed',
            type: 'boolean',
          },
          {
            name: 'employed_normal_salary',
            type: 'boolean',
          },
          {
            name: 'employed_salary_reduced',
            type: 'boolean',
          },
          {
            name: 'employed_vacations',
            type: 'boolean',
          },
          {
            name: 'employed_on_leave_salary_reduced',
            type: 'boolean',
          },
          {
            name: 'employed_on_leave_normal_salary',
            type: 'boolean',
          },
          {
            name: 'employed_on_leave_no_salary',
            type: 'boolean',
          },
          {
            name: 'retired',
            type: 'boolean',
          },
          {
            name: 'self_employed_legally',
            type: 'boolean',
          },
          {
            name: 'odd_jobs',
            type: 'boolean',
          },
          {
            name: 'revenue',
            type: 'boolean',
          },
          {
            name: 'employer',
            type: 'boolean',
          },
          {
            name: 'work_status',
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
