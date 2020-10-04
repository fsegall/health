import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CreateColumnCompleteWithErrorsInterview1601839800577 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'interviews',
      new TableColumn({
        name: 'is_complete_with_errors',
        type: 'boolean',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('interviews', 'is_complete_with_errors');
  }

}
