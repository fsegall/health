import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIndigenousSaudeDoencaV21701728187408
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'saude_doenca_indigena_v2',
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
            name: 'condicao_de_saude',
            type: 'varchar',
          },
          {
            name: 'morador_com_desabilidade',
            type: 'varchar',
          },
          {
            name: 'local_permite_viver_com_saude',
            type: 'varchar',
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
            name: 'ocorrencia_de_ameacas',
            type: 'varchar',
          },
          {
            name: 'ocorrencia_violencia_fisica',
            type: 'varchar',
          },
          {
            name: 'local_ocorrencia_violencia_fisica',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'locais_impedido_de_entrar',
            type: 'text',
          },
          {
            name: 'lista_diagnosticos',
            type: 'varchar',
          },
          {
            name: 'lista_diagnosticos_cronico_remedio',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'lista_diagnosticos_outros',
            type: 'varchar',
          },
          {
            name: 'lista_tratamentos',
            type: 'text',
          },
          {
            name: 'lista_diagnosticos_outros_remedio',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'moradora_entre_13_e_45_anos',
            type: 'varchar',
          },
          {
            name: 'mulheres_e_gestacao',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'crianca_ate_6_meses',
            type: 'varchar',
          },
          {
            name: 'crianca_ate_6_meses_leito_do_peito',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'crianca_ate_6_meses_outros_alimentos',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'crianca_entre_6_meses_e_2_anos',
            type: 'varchar',
          },
          {
            name: 'crianca_entre_6_meses_e_2_anos_leite_do_peito',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'aldeia_possui_posto_de_saude',
            type: 'varchar',
          },
          {
            name: 'cuidadores_para_aldeia_sem_posto_de_saude',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'acesso_a_equipe_de_saude',
            type: 'varchar',
          },
          {
            name: 'profissionais_acesso_a_equipe_de_saude',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'morador_internado',
            type: 'varchar',
          },
          {
            name: 'possui_morador_menor_ou_igual_a_5_anos',
            type: 'varchar',
          },
          {
            name: 'morador_problemas_bebidas_alcoolicas',
            type: 'varchar',
          },
          {
            name: 'fuma_cigarro',
            type: 'varchar',
          },
          {
            name: 'morador_problemas_uso_drogas',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'FKEntrevistaIndigenaSaudeDoenca',
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
    await queryRunner.dropTable('saude_doenca_indigena_v2');
  }
}
