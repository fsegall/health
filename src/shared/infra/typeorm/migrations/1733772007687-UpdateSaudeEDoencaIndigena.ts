import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateSaudeEDoencaIndigena1733772007687
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'morador_com_desabilidade',
    );

    await queryRunner.addColumn(
      'saude_doenca_indigena_v2',
      new TableColumn({
        name: 'morador_com_desabilidade',
        type: 'text',
      }),
    );

    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'morador_exposto_veneno_lavoura',
    );

    await queryRunner.addColumn(
      'saude_doenca_indigena_v2',
      new TableColumn({
        name: 'morador_exposto_veneno_lavoura',
        type: 'text',
      }),
    );

    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'ocorrencia_de_ameacas',
    );

    await queryRunner.addColumn(
      'saude_doenca_indigena_v2',
      new TableColumn({
        name: 'ocorrencia_de_ameacas',
        type: 'text',
      }),
    );

    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'ocorrencia_violencia_fisica',
    );

    await queryRunner.addColumn(
      'saude_doenca_indigena_v2',
      new TableColumn({
        name: 'ocorrencia_violencia_fisica',
        type: 'text',
      }),
    );

    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'ocorrencia_violencia_fisica',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'morador_com_desabilidade',
    );

    await queryRunner.addColumn(
      'saude_doenca_indigena_v2',
      new TableColumn({
        name: 'morador_com_desabilidade',
        type: 'varchar',
      }),
    );

    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'morador_exposto_veneno_lavoura',
    );

    await queryRunner.addColumn(
      'saude_doenca_indigena_v2',
      new TableColumn({
        name: 'morador_exposto_veneno_lavoura',
        type: 'varchar',
      }),
    );

    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'ocorrencia_de_ameacas',
    );

    await queryRunner.addColumn(
      'saude_doenca_indigena_v2',
      new TableColumn({
        name: 'ocorrencia_de_ameacas',
        type: 'varchar',
      }),
    );

    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'ocorrencia_violencia_fisica',
    );

    await queryRunner.addColumn(
      'saude_doenca_indigena_v2',
      new TableColumn({
        name: 'ocorrencia_violencia_fisica',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'saude_doenca_indigena_v2',
      new TableColumn({
        name: 'local_ocorrencia_violencia_fisica',
        type: 'text',
      }),
    );
  }
}
