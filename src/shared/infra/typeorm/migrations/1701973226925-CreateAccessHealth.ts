import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdatePersonForm1701973226925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('persons', [
      new TableColumn({
        name: 'estado_de_saude',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'local_de_procura_do_servico_de_saude',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'motivo_procura_servico_saude',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'motivo_nao_atendimento_servico_saude',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'doenca_ultimos_12_meses',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'diagnostico_doenca_ultimos_12_meses',
        type: 'varchar',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('person', [
      'estado_de_saude',
      'local_de_procura_do_servico_de_saude',
      'motivo_procura_servico_saude',
      'motivo_nao_atendimento_servico_saude',
      'doenca_ultimos_12_meses',
      'diagnostico_doenca_ultimos_12_meses',
    ]);
  }
}
