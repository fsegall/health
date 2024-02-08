import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class LifeQualityMentalHealthAndStress1701899958334
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'qualidade_vida_saude_mental_estresse',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'interview_id',
            type: 'uuid',
          },
          {
            name: 'sente_nervoso_tenso_preocupado',
            type: 'varchar',
          },
          {
            name: 'assusta_com_facilidade',
            type: 'varchar',
          },
          {
            name: 'sente_triste',
            type: 'varchar',
          },
          {
            name: 'chora_mais_do_que_costume',
            type: 'varchar',
          },
          {
            name: 'dores_de_cabeca_frequente',
            type: 'varchar',
          },
          {
            name: 'dorme_mal',
            type: 'varchar',
          },
          {
            name: 'desconforto_estomacal',
            type: 'varchar',
          },
          {
            name: 'ma_digestao',
            type: 'varchar',
          },
          {
            name: 'falta_de_apetite',
            type: 'varchar',
          },
          {
            name: 'tremores_maos',
            type: 'varchar',
          },
          {
            name: 'cansa_com_facilidade',
            type: 'varchar',
          },
          {
            name: 'dificuldade_tomar_decisao',
            type: 'varchar',
          },
          {
            name: 'dificuldade_satisfacao_tarefas',
            type: 'varchar',
          },
          {
            name: 'trabalho_traz_sofrimento',
            type: 'varchar',
          },
          {
            name: 'cansado_tempo_todo',
            type: 'varchar',
          },
          {
            name: 'dificuldade_pensar_claramente',
            type: 'varchar',
          },
          {
            name: 'incapaz_desempenhar_papel_util',
            type: 'varchar',
          },
          {
            name: 'perdeu_interesse_pelas_coisas',
            type: 'varchar',
          },
          {
            name: 'dar_fim_a_vida',
            type: 'varchar',
          },
          {
            name: 'sente_inutil',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'FKInterviewToInterviewQualityLifeMentalHealth',
            columnNames: ['interview_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'interviews',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('qualidade_vida_saude_mental_estresse');
  }
}
