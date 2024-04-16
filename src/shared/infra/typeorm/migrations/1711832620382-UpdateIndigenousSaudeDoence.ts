import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateIndigenousSaudeDoence1711832620382
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns('saude_doenca_indigena_v2', [
      {
        oldColumn: new TableColumn({
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        }),
        newColumn: new TableColumn({
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'motivo_doencas_contato_veneno_lavoura',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'motivo_doencas_contato_veneno_lavoura',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'acidentes',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'acidentes',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'local_ocorrencia_violencia_fisica',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'local_ocorrencia_violencia_fisica',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'lista_diagnosticos',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'lista_diagnosticos',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'lista_diagnosticos_outros',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'lista_diagnosticos_outros',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'mulheres_e_gestacao',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'mulheres_e_gestacao',
          type: 'text',
          isNullable: true,
          default: null,
        }),
      },
    ]);
    await queryRunner.addColumns('saude_doenca_indigena_v2', [
      new TableColumn({
        name: 'possui_morador_menor_ou_igual_a_5_anos_desnutricao',
        type: 'varchar',
        isNullable: true,
        default: null,
      }),
      new TableColumn({
        name: 'possui_morador_crianca_diarreia',
        type: 'varchar',
        isNullable: true,
        default: null,
      }),
      new TableColumn({
        name: 'possui_morador_crianca_pneumonia',
        type: 'varchar',
        isNullable: true,
        default: null,
      }),
    ]);
    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'lista_tratamentos',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'possui_morador_menor_ou_igual_a_5_anos_desnutricao',
    );
    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'possui_morador_crianca_diarreia',
    );
    await queryRunner.dropColumn(
      'saude_doenca_indigena_v2',
      'possui_morador_crianca_pneumonia',
    );
  }
}
