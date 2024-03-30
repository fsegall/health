import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class UpdateIndigenousInterviewV21711818341064
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('entrevistas_indigenas_v2', [
      new TableColumn({
        name: 'project_id',
        type: 'uuid',
        isNullable: true,
      }),
    ]);
    await queryRunner.createForeignKey(
      'entrevistas_indigenas_v2',
      new TableForeignKey({
        name: 'FKIndigenousInterviewProject',
        columnNames: ['project_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'projects',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'entrevistas_indigenas_v2',
      'FKIndigenousInterviewProject',
    );
    await queryRunner.dropColumn('entrevistas_indigenas_v2', 'project_id');
  }
}
