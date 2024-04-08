import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdatePersonFormArrayFields1711732923115
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns('persons', [
      {
        oldColumn: new TableColumn({
          name: 'local_de_procura_do_servico_de_saude',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'local_de_procura_do_servico_de_saude',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'motivo_procura_servico_saude',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'motivo_procura_servico_saude',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'motivo_nao_atendimento_servico_saude',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'motivo_nao_atendimento_servico_saude',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'doenca_ultimos_12_meses',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'doenca_ultimos_12_meses',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'diagnostico_doenca_ultimos_12_meses',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'diagnostico_doenca_ultimos_12_meses',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('person', [
      'local_de_procura_do_servico_de_saude',
      'motivo_procura_servico_saude',
      'motivo_nao_atendimento_servico_saude',
      'doenca_ultimos_12_meses',
      'diagnostico_doenca_ultimos_12_meses',
    ]);
  }
}
