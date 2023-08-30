import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateVacinaFieldOnPersons1693069719752
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'persons',
      'vacina',
      new TableColumn({
        name: 'vacina',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'persons',
      'vacina',
      new TableColumn({
        name: 'vacina',
        type: 'varchar',
      }),
    );
  }
}
