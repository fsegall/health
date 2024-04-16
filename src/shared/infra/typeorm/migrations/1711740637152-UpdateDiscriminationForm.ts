import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateDiscriminationForm1711740637152
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns('discriminations', [
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
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
