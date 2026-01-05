import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateExistingIndigenousInterviewsProjectId1767571443000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Atualiza project_id das entrevistas existentes baseado no projeto_numero
    await queryRunner.query(`
      UPDATE entrevistas_indigenas_v2
      SET project_id = projects.id
      FROM projects
      WHERE entrevistas_indigenas_v2.projeto_numero = projects.project_number
        AND entrevistas_indigenas_v2.project_id IS NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverte: remove project_id das entrevistas atualizadas
    // Note: isso só funciona se quisermos reverter, mas pode não ser necessário
    await queryRunner.query(`
      UPDATE entrevistas_indigenas_v2
      SET project_id = NULL
      WHERE project_id IS NOT NULL
    `);
  }
}

