import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigeanousAlimentacaoNutricao1665247041586
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'alimentacao_nutricao_indigena',
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
            name: 'morar_retomada_mudou_alimentacao',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'luta_por_terra',
            type: 'varchar',
          },
          {
            name: 'sem_alimentacao_por_conflito_com_terras',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'motivo_sem_alimentacao_por_conflito_com_terras',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'origem_comida',
            type: 'varchar',
          },
          {
            name: 'possui_moradores_menores_de_16',
            type: 'varchar',
          },
          {
            name: 'alimentacao_saudavel_diariamente_30d',
            type: 'varchar',
          },
          {
            name: 'comida_disponivel_todos_os_dias_30d',
            type: 'varchar',
          },
          {
            name: 'dia_sem_alimentos_30d',
            type: 'varchar',
          },
          {
            name: 'preocupacao_em_conseguir_comida_30d',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'alimentacao_do_gosto_30d',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'comeu_menos_para_alimentar_os_jovens_30d',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'jovens_comeram_menos_do_necessario_30d',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'jovens_passaram_algum_dia_sem_alimentos_30d',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'consumiram_sempre_alimentos_da_cultura',
            type: 'varchar',
          },
          {
            name: 'acao_quando_falta_comida',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'morador_faz_horta',
            type: 'varchar',
          },
          {
            name: 'motivo_morador_nao_faz_horta',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'alimentos_da_horta',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'frutiferas_nas_proximidades',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'producao_de_comida_ano_todo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'origem_semente_plantio',
            type: 'text',
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
            type: 'text',
            isNullable: true,
          },
          {
            name: 'finalidade_horta',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'animais_de_criacao_alimentacao_ou_venda',
            type: 'varchar',
          },
          {
            name: 'lista_animais_de_criacao_alimentacao_ou_venda',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'domicilio_possui_agua_para_animais',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'domicilio_possui_agua_para_producao_alimentos',
            type: 'varchar',
          },
          {
            name: 'precisou_comprar_alimentos_3m',
            type: 'varchar',
          },
          {
            name: 'lugar_precisou_comprar_alimentos_3m',
            type: 'text',
          },
          {
            name: 'possui_cultivo_plantas_medicinais',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'faz_remedios_com_plantas',
            type: 'varchar',
          },
          {
            name: 'moradia_possui_fogao',
            type: 'text',
          },
          {
            name: 'material_utilizado_para_fazer_fogo',
            type: 'varchar',
          },
          {
            name: 'alimentos_consumidos_dia_anterior',
            type: 'text',
          },
          {
            name: 'primeiros_a_se_alimentar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'ultimos_a_se_alimentar',
            type: 'varchar',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FKEntrevistaIndigenaAlimentacao',
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
    await queryRunner.dropTable('alimentacao_nutricao_indigena');
  }
}
