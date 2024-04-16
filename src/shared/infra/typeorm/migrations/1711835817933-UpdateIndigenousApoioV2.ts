import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class UpdateIndigenousApoioV21711835817933
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns('apoio_protecao_indigena_v2', [
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
          name: 'recebeu_cesta_alimentos',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'recebeu_cesta_alimentos',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
    ]);
    await queryRunner.dropForeignKey(
      'apoio_protecao_indigena_v2',
      'FKEntrevistaIndigenaApoioFinanceiro',
    );
    await queryRunner.createForeignKey(
      'apoio_protecao_indigena_v2',
      new TableForeignKey({
        name: 'FKIndigenousApoioV2EntrevistaV2',
        columnNames: ['entrevista_indigena_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'entrevistas_indigenas_v2',
      }),
    );
  }

  public async down(): Promise<void> {}
}
