import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddOcorrenciaViolenciaFisicaColumn1767572000000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // A migration 1733772007687 removeu esta coluna duas vezes por engano
    // Precisamos adicioná-la de volta
    const table = await queryRunner.getTable('saude_doenca_indigena_v2');
    const column = table?.findColumnByName('ocorrencia_violencia_fisica');

    // Só adiciona se a coluna não existir
    if (!column) {
      await queryRunner.addColumn(
        'saude_doenca_indigena_v2',
        new TableColumn({
          name: 'ocorrencia_violencia_fisica',
          type: 'text',
          // Não nullable: se o módulo existe, todos os campos devem estar preenchidos
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('saude_doenca_indigena_v2');
    const column = table?.findColumnByName('ocorrencia_violencia_fisica');

    if (column) {
      await queryRunner.dropColumn('saude_doenca_indigena_v2', 'ocorrencia_violencia_fisica');
    }
  }
}

