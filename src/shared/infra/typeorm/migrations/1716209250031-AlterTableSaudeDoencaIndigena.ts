import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterTableSaudeDoencaIndigena1716209250031
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('saude_doenca_indigena_v2', [
      new TableColumn({
        name: 'lista_diagnosticos_doencas_infecciosas',
        type: 'text',
      }),
      new TableColumn({
        name: 'lista_diagnosticos_doencas_infecciosas_remedio',
        type: 'varchar',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('saude_doenca_indigena_v2', [
      'lista_diagnosticos_doencas_infecciosas',
      'lista_diagnosticos_doencas_infecciosas_remedio',
    ]);
  }
}
