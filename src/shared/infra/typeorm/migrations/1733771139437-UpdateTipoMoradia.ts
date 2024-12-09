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
  }
}
