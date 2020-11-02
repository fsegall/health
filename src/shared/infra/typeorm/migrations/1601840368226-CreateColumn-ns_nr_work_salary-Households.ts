import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export default class CreateColumnNsNrWorkSalaryHouseholds1601840368226 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'ns_nr_work_salary',
        type: 'boolean',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('households', 'ns_nr_work_salary');
  }

}
