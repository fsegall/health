import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigenousApoioEProtecaoSocialV21701800461718
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'apoio_protecao_indigena_v2',
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
            name: 'possui_crianca_ou_jovem_que_frequenta_escola',
            type: 'varchar',
          },
          {
            name: 'criancas_comem_escola',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'alimentacao_escolar_inclui_cultura',
            type: 'varchar',
          },
          {
            name: 'renda_total_30_dias',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'opcoes_renda_total_30_dias',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'recebeu_cesta_alimentos',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'motivo_nao_recebe_cesta_alimentos',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'bolsa_familia_auxilio_brasil',
            type: 'varchar',
          },
          {
            name: 'valor_bolsa_familia_auxilio_brasil',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'bpc',
            type: 'varchar',
          },
          {
            name: 'valor_bpc',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'auxilio_maternidade',
            type: 'varchar',
          },
          {
            name: 'valor_auxilio_maternidade',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'auxilio_doenca',
            type: 'varchar',
          },
          {
            name: 'valor_auxilio_doenca',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'aposentadoria',
            type: 'varchar',
          },
          {
            name: 'valor_aposentadoria',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'pensao_morte',
            type: 'varchar',
          },
          {
            name: 'valor_pensao_morte',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'programa_auxilio_estadual_municipal',
            type: 'varchar',
          },
          {
            name: 'valor_programa_auxilio_estadual_municipal',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'cesta_alimentos',
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
    await queryRunner.dropTable('apoio_protecao_indigena_v2');
  }
}
