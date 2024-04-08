import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateHouseholdForm1711738972463 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('households', 'morador_de_rua');

    await queryRunner.changeColumns('households', [
      {
        oldColumn: new TableColumn({
          name: 'ns_nr_trabalho',
          type: 'boolean',
        }),
        newColumn: new TableColumn({
          name: 'ns_nr_trabalho',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'contribuicao_morte_ultimos_12m',
          type: 'varchar',
        }),
        newColumn: new TableColumn({
          name: 'contribuicao_morte_ultimos_12_meses',
          type: 'varchar',
          isNullable: true,
          default: null,
        }),
      },
    ]);
  }

  public async down(): Promise<void> {}
}
