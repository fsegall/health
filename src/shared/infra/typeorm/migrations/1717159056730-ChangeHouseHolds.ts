import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangeHouseHolds1717159056730 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('households', [
      'causa_morte_ultimos_12_meses',
      'perda_de_emprego',
      // 'reducao_salario',
      'ajuda_financeira',
      'divida',
      'corte_de_gastos',
      'corte_de_gastos_nao_essenciais',
      'ns_nr_trabalho',
      'dificuldade_venda',
    ]);

    await queryRunner.addColumns('households', [
      new TableColumn({
        name: 'causa_morte_ultimos_12_meses',
        type: 'text',
        isNullable: true,
      }),
      new TableColumn({
        name: 'situacao_de_emprego_e_renda',
        type: 'text',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('households', [
      'causa_morte_ultimos_12_meses',
      'situacao_de_emprego_e_renda',
    ]);

    await queryRunner.addColumns('households', [
      new TableColumn({
        name: 'causa_morte_ultimos_12_meses',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'perda_de_emprego',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'reducao_salario',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'ajuda_financeira',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'divida',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'corte_de_gastos',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'corte_de_gastos_nao_essenciais',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'ns_nr_trabalho',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'dificuldade_venda',
        type: 'varchar',
        isNullable: true,
      }),
    ]);
  }
}
