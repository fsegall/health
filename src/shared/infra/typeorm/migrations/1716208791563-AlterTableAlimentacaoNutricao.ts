import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterTableAlimentacaoNutricao1716208791563
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      'alimentacao_nutricao_indigena_v2',
      'nao_comeu_comida_cultura',
    );
    await queryRunner.dropColumn(
      'alimentacao_nutricao_indigena_v2',
      'nao_comeu_comida_saudavel',
    );
    await queryRunner.dropColumn(
      'alimentacao_nutricao_indigena_v2',
      'faltou_comida',
    );
    await queryRunner.dropColumn(
      'alimentacao_nutricao_indigena_v2',
      'frutiferas_nas_proximidades',
    );

    await queryRunner.addColumns('alimentacao_nutricao_indigena_v2', [
      new TableColumn({
        name: 'comeu_sempre_comida_da_cultura',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'comeram_sempre_comida_saudavel',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'teve_comida_todos_os_dias',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'frutiferas_nas_proximidades_quais',
        type: 'varchar',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      'alimentacao_nutricao_indigena_v2',
      'comeu_sempre_comida_da_cultura',
    );
    await queryRunner.dropColumn(
      'alimentacao_nutricao_indigena_v2',
      'comeram_sempre_comida_saudavel',
    );
    await queryRunner.dropColumn(
      'alimentacao_nutricao_indigena_v2',
      'teve_comida_todos_os_dias',
    );
    await queryRunner.dropColumn(
      'alimentacao_nutricao_indigena_v2',
      'frutiferas_nas_proximidades_quais',
    );
  }
}
