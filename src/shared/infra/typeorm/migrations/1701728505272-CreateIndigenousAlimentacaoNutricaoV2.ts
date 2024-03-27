import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigenousAlimentacaoNutricaoV21701728505272
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'alimentacao_nutricao_indigena_v2',
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
            name: 'possui_moradores_menores_de_16',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'preocupação_nao_conseguir_comida',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nao_comeu_comida_cultura',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nao_comeu_comida_saudavel',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'faltou_comida',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'dia_todo_sem_comer',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'comeu_menos_para_deixar_comida_crianca',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'crianca_comeu_menos',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'criança_dia_todo_sem_comer',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'constrangimento_pedir_ajuda_alimentos',
            type: 'varchar',
          },
          {
            name: 'morador_faz_horta',
            type: 'varchar',
          },
          {
            name: 'motivo_morador_nao_faz_horta',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'alimentos_da_horta',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'alimentos_da_horta_outros',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'frutiferas_nas_proximidades',
            type: 'text',
          },
          {
            name: 'coleta_castanhas_cocos_frutas',
            type: 'varchar',
          },
          {
            name: 'funcao_cultivo_horta',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'origem_semente_plantio',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'adiciona_veneno_na_plantacao',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'dificuldade_com_horta',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'lista_dificuldades_com_horta',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'animais_de_criacao_alimentacao_ou_venda',
            type: 'varchar',
          },
          {
            name: 'lista_animais_de_criacao_alimentacao_ou_venda',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'realizam_caca',
            type: 'varchar',
          },
          {
            name: 'realizam_pesca',
            type: 'varchar',
          },
          {
            name: 'possui_cultivo_plantas_medicinais',
            type: 'varchar',
          },
          {
            name: 'alimentos_consumidos_dia_anterior',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'FKEntrevistaIndigenaAlimentacao',
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
    await queryRunner.dropTable('alimentacao_nutricao_indigena_v2');
  }
}
