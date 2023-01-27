import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addIsOfflineToIndigenousInterview1674829737734
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'entrevistas_indigenas',
      new TableColumn({
        name: 'is_offline',
        type: 'boolean',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('entrevistas_indigenas', 'is_offline');
  }
}
