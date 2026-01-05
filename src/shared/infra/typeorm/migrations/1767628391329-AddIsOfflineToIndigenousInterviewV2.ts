import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddIsOfflineToIndigenousInterviewV21767628391329
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'entrevistas_indigenas_v2',
      new TableColumn({
        name: 'is_offline',
        type: 'boolean',
        default: false,
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('entrevistas_indigenas_v2', 'is_offline');
  }
}
