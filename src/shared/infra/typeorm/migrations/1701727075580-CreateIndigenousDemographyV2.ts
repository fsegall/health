import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigenousDemographyV21701727075580
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'demografia_indigena_v2',
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
            name: 'total_moradores',
            type: 'integer',
          },
          {
            name: 'moradores',
            type: 'jsonb',
          },
          {
            name: 'morador_nao_indigena',
            type: 'varchar',
          },
          {
            name: 'quantidade_morador_nao_indigena',
            type: 'int',
          },
          {
            name: 'povo_etnia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'serie_frequentada_escola',
            type: 'varchar',
          },
          {
            name: 'crenca_religiao',
            type: 'varchar',
          },
          {
            name: 'crenca_religiao_igreja',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'situacao_no_trabalho',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'remuneracao_trabalho_na_aldeia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'funcao_trabalho_remunerado_na_aldeia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'remuneracao_trabalho_fora_aldeia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'funcao_trabalho_remunerado_fora_da_aldeia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'funcao_nao_remunerada_aldeia',
            type: 'varchar',
          },
          {
            name: 'motivo_nao_trabalha',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKIndigeanousDemographyInterview',
            columnNames: ['entrevista_indigena_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'entrevistas_indigenas_v2',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('demografia_indigena_v2');
  }
}
