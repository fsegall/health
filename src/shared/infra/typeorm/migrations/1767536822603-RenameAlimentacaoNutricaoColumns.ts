import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameAlimentacaoNutricaoColumns1767536822603
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Renomear coluna comeu_sempre_comida_da_cultura para deixaram_de_comer_comida_da_cultura
    await queryRunner.renameColumn(
      'alimentacao_nutricao_indigena_v2',
      'comeu_sempre_comida_da_cultura',
      'deixaram_de_comer_comida_da_cultura',
    );

    // Renomear coluna comeram_sempre_comida_saudavel para deixaram_de_comer_comida_saudavel
    await queryRunner.renameColumn(
      'alimentacao_nutricao_indigena_v2',
      'comeram_sempre_comida_saudavel',
      'deixaram_de_comer_comida_saudavel',
    );

    // Renomear coluna teve_comida_todos_os_dias para faltou_comida_algum_dia
    await queryRunner.renameColumn(
      'alimentacao_nutricao_indigena_v2',
      'teve_comida_todos_os_dias',
      'faltou_comida_algum_dia',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverter: deixaram_de_comer_comida_da_cultura para comeu_sempre_comida_da_cultura
    await queryRunner.renameColumn(
      'alimentacao_nutricao_indigena_v2',
      'deixaram_de_comer_comida_da_cultura',
      'comeu_sempre_comida_da_cultura',
    );

    // Reverter: deixaram_de_comer_comida_saudavel para comeram_sempre_comida_saudavel
    await queryRunner.renameColumn(
      'alimentacao_nutricao_indigena_v2',
      'deixaram_de_comer_comida_saudavel',
      'comeram_sempre_comida_saudavel',
    );

    // Reverter: faltou_comida_algum_dia para teve_comida_todos_os_dias
    await queryRunner.renameColumn(
      'alimentacao_nutricao_indigena_v2',
      'faltou_comida_algum_dia',
      'teve_comida_todos_os_dias',
    );
  }
}

