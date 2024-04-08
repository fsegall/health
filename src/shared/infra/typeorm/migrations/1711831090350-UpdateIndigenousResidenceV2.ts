import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateIndigenousResidenceV21711831090350
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns('domicilio_indigena_v2', [
      {
        oldColumn: new TableColumn({
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        }),
        newColumn: new TableColumn({
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'utensilios_de_trabalho',
          type: 'integer',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'utensilios_de_trabalho',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'utensilios_casa',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'utensilios_casa',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'veiculos',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'veiculos',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'destino_lixo_da_residencia',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'destino_lixo_da_residencia',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
