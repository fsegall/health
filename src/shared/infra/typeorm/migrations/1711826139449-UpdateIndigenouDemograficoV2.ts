import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateIndigenouDemograficoV21711826139449
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns('demografia_indigena_v2', [
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
          name: 'povo_etnia',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'povo_etnia',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
