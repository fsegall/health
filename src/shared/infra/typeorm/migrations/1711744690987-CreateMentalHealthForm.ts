import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMentalHealthForm1711744690987 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'mental_healths',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'person_id',
            type: 'varchar',
          },
          { name: 'nervoso_tenso_preocupado', type: 'varchar' },
          { name: 'facilidade_assustar', type: 'varchar' },
          { name: 'sentimento_tristeza', type: 'varchar' },
          { name: 'chora_mais_que_de_costume', type: 'varchar' },
          { name: 'dor_de_cabeca_frequente', type: 'varchar' },
          { name: 'dorme_mal', type: 'varchar' },
          { name: 'desconforto_estomacal', type: 'varchar' },
          { name: 'ma_digestao', type: 'varchar' },
          { name: 'falta_de_apetite', type: 'varchar' },
          { name: 'tremores_nas_maos', type: 'varchar' },
          { name: 'cansa_com_facilidade', type: 'varchar' },
          { name: 'dificuldade_tomada_de_decisao', type: 'varchar' },
          { name: 'dificuldade_satisfacao_em_tarefas', type: 'varchar' },
          { name: 'trabalho_traz_sofrimento', type: 'varchar' },
          { name: 'cansado_tempo_todo', type: 'varchar' },
          { name: 'dificuldade_pensar_claramente', type: 'varchar' },
          { name: 'incapaz_desempenhar_papel_util', type: 'varchar' },
          { name: 'perdeu_interesse_pelas_coisas', type: 'varchar' },
          { name: 'pensado_dar_fim_na_vida', type: 'varchar' },
          { name: 'sentimento_inutilidade_em_sua_vida', type: 'varchar' },
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('mental_healths');
  }
}
