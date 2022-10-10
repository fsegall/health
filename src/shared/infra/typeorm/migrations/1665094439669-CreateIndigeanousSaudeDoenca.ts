import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigeanousSaudeDoenca1665094439669
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'saude_doenca_indigena',
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
            name: 'tomou_vacina_covid',
            type: 'varchar',
          },
          {
            name: 'condicao_de_saude',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'tekoha_mudou_condicao_de_saude',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'morador_exposto_veneno_lavoura',
            type: 'varchar',
          },
          {
            name: 'doencas_contato_veneno_lavoura',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'motivo_doencas_contato_veneno_lavoura',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'acidentes',
            type: 'varchar',
          },
          {
            name: 'acidentes_ocorridos',
            type: 'text',
          },
          {
            name: 'ocorrencia_de_ameacas',
            type: 'varchar',
          },
          {
            name: 'ocorrencia_violencia_fisica',
            type: 'varchar',
          },
          {
            name: 'local_ocorrencia_violencia_fisica',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'lista_tratamentos',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'tratamento_com_paje_ou_similar',
            type: 'varchar',
          },
          {
            name: 'tratamento_igreja',
            type: 'varchar',
          },
          {
            name: 'medicacao_uso_continuo',
            type: 'varchar',
          },
          {
            name: 'doenca_medicacao_uso_continuo',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'primeiro_recurso_ao_notar_doenca',
            type: 'varchar',
          },
          {
            name: 'morador_internado',
            type: 'varchar',
          },
          {
            name: 'morador_problemas_bebidas_alcoolicas',
            type: 'varchar',
          },
          {
            name: 'morador_problemas_uso_drogas',
            type: 'varchar',
          },
          {
            name: 'familiar_morte_covid',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'familiar_morte_covid_contribuia_renda_familiar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'familiares_morte_outras_causas',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'motivo_familiares_morte_outras_causas',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'familiares_morte_outras_causas_contribuia_renda_familiar',
            type: 'varchar',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FKEntrevistaIndigenaSaudeDoenca',
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
    await queryRunner.dropTable('saude_doenca_indigena');
  }
}
