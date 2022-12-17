import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangeFieldsSaudeDoencaTable1671294011594
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      'saude_doenca_indigena',
      'familiar_morte_covid',
    );
    await queryRunner.dropColumn(
      'saude_doenca_indigena',
      'familiar_morte_covid_contribuia_renda_familiar',
    );
    await queryRunner.addColumn(
      'saude_doenca_indigena',
      new TableColumn({
        name: 'familiar_morte',
        type: 'varchar',
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'saude_doenca_indigena',
      new TableColumn({
        name: 'familiar_morte_contribuia_renda_familiar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('saude_doenca_indigena', 'familiar_morte');
    await queryRunner.dropColumn(
      'saude_doenca_indigena',
      'familiar_morte_contribuia_renda_familiar',
    );
    await queryRunner.addColumn(
      'saude_doenca_indigena',
      new TableColumn({
        name: 'familiar_morte_covid',
        type: 'varchar',
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'saude_doenca_indigena',
      new TableColumn({
        name: 'familiar_morte_covid_contribuia_renda_familiar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }
}
