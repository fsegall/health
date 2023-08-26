import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateHouseholdsCovidQuestion1693068619977
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('households', 'covid_2020');
    await queryRunner.dropColumn('households', 'covid_2021');
    await queryRunner.dropColumn('households', 'covid_2022');
    await queryRunner.dropColumn('households', 'covid_perda');
    await queryRunner.dropColumn('households', 'educacao_basica_publica');
    await queryRunner.dropColumn('households', 'pnae');

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'diagnostico_covid_positivo',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'sequelas_covid',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'morte_ultimos_12_meses',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'causa_morte_ultimos_12_meses',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'menores_6_anos',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'frequentam_creche',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'contribuicao_morte_ultimos_12m',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('households', 'diagnostico_covid_positivo');
    await queryRunner.dropColumn('households', 'sequelas_covid');
    await queryRunner.dropColumn('households', 'morte_ultimos_12_meses');
    await queryRunner.dropColumn('households', 'causa_morte_ultimos_12_meses');
    await queryRunner.dropColumn('households', 'menores_6_anos');
    await queryRunner.dropColumn('households', 'frequentam_creche');
    await queryRunner.dropColumn(
      'households',
      'contribuicao_morte_ultimos_12m',
    );

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'covid_2020',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'covid_2021',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'covid_2022',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'covid_perda',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'educacao_basica_publica',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'households',
      new TableColumn({
        name: 'pnae',
        type: 'varchar',
      }),
    );
  }
}
