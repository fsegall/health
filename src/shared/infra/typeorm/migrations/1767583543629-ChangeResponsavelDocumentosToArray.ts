import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangeResponsavelDocumentosToArray1767583543629
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns('entrevistas_indigenas_v2', [
      {
        oldColumn: new TableColumn({
          name: 'responsavel_documentos',
          type: 'varchar',
        }),
        newColumn: new TableColumn({
          name: 'responsavel_documentos',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
