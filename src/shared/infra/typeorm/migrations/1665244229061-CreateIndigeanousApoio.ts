import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigeanousApoioFinanceiro1665244229061
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'apoio_protecao_indigena',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'entrevista_indigena_id',
            type: 'uuid',
          },
          {
            name: 'criancas_comem_escola',
            type: 'varchar',
          },
          {
            name: 'alimentacao_escolar_inclui_cultura',
            type: 'varchar',
          },
          {
            name: 'morador_recebe_ajuda_financeira',
            type: 'varchar',
          },
          {
            name: 'morador_recebe_programa_social',
            type: 'json',
          },
          {
            name: 'recebeu_cesta_alimentos',
            type: 'varchar',
          },
          {
            name: 'recebeu_cesta_alimentos_que_alimentos_deveriam_ter',
            type: 'varchar',
          },
          {
            name: 'motivo_nao_recebe_cesta_alimentos',
            type: 'varchar',
          },
          {
            name: 'recebeu_ajuda_3m',
            type: 'varchar',
          },
          {
            name: 'o_que_recebeu_ajuda_3m',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'constrangimento_pedir_ajuda_alimentos_3m',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'FKEntrevistaIndigenaApoioFinanceiro',
            columnNames: ['entrevista_indigena_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'entrevistas_indigenas',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('apoio_indigena');
  }
}
