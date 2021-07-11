import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class CreateVacinaColumnsHouseholdTable1626040715661 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'vacina',
        type: 'varchar',
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'nao_tomou_vacina',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('households', 'vacina');
    await queryRunner.dropColumn('households', 'nao_tomou_vacina');
  }

}
