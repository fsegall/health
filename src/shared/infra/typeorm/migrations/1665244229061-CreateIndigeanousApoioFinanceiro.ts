import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigeanousApoioFinanceiro1665244229061
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'apoio_financeiro_indigena',
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
            name: 'morador_matriculado_na_educacao_basica_publica',
            type: 'varchar',
          },
          {
            name: 'quantidade_morador_matriculado_na_educacao_basica_publica',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'criancas_comem_na_escola',
            type: 'varchar',
          },
          {
            name: 'escola_inclui_alimentos_da_cultura',
            type: 'varchar',
          },
          {
            name: 'morador_recebe_ajuda_financeira',
            type: 'varchar',
          },
          {
            name: 'bolsa_familia_auxilio_brasil',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'bpc',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'beneficio_deficientes_ou_idosos',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'auxilio_maternidade',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'auxilio_doenca',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'auxilio_reclusao',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'aposentadoria',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'pensao_morte_conjuge',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'pronaf',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'auxilio_estadual_ou_municipal',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cesta_de_alimentos',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'quantidade_cesta_de_alimentos_3m',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'origem_cesta_de_alimentos_3m',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'alimentos_deveriam_estar_na_cesta_e_nao_estao',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'alimentos_que_nao_deveriam_estar_na_cesta',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'descricao_adicionar_outro',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'descricao_remover_outro',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'motivo_nao_recebe_cesta_de_alimentos',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'quem_pega_dinheiro_bolsa_familia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'auxilio_emergencial_na_pandemia',
            type: 'varchar',
          },
          {
            name: 'quantidade_vezes_auxilio_emergencial_na_pandemia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'ajuda_estado_prefeitura_outros_3m',
            type: 'varchar',
          },
          {
            name: 'itens_recebidos_ajuda_estado_prefeitura_outros_3m',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'vergonha_constrangimento_para_conseguir_alimentos_3m',
            type: 'varchar',
            isNullable: true,
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
    await queryRunner.dropTable('apoio_financeiro_indigena');
  }
}
