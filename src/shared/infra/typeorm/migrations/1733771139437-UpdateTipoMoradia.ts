import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateTipoMoradia1733771139437 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('domicilio_indigena_v2', 'tipo_moradia');
    await queryRunner.addColumn(
      'domicilio_indigena_v2',
      new TableColumn({
        name: 'tipo_moradia',
        type: 'text',
      }),
    );

    await queryRunner.dropColumn(
      'domicilio_indigena_v2',
      'forma_coleta_esgoto',
    );
    await queryRunner.addColumn(
      'domicilio_indigena_v2',
      new TableColumn({
        name: 'forma_coleta_esgoto',
        type: 'text',
      }),
    );

    await queryRunner.dropColumn(
      'domicilio_indigena_v2',
      'destino_lixo_da_residencia',
    );
    await queryRunner.addColumn(
      'domicilio_indigena_v2',
      new TableColumn({
        name: 'destino_lixo_da_residencia',
        type: 'text',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('domicilio_indigena_v2', 'tipo_moradia');
    await queryRunner.addColumn(
      'domicilio_indigena_v2',
      new TableColumn({
        name: 'tipo_moradia',
        type: 'varchar',
      }),
    );

    await queryRunner.dropColumn(
      'domicilio_indigena_v2',
      'forma_coleta_esgoto',
    );
    await queryRunner.addColumn(
      'domicilio_indigena_v2',
      new TableColumn({
        name: 'forma_coleta_esgoto',
        type: 'varchar',
      }),
    );

    await queryRunner.dropColumn(
      'domicilio_indigena_v2',
      'destino_lixo_da_residencia',
    );
    await queryRunner.addColumn(
      'domicilio_indigena_v2',
      new TableColumn({
        name: 'destino_lixo_da_residencia',
        type: 'varchar',
      }),
    );
  }
}
