import { MigrationInterface, QueryRunner } from 'typeorm';

export class ConvertMultiSelectFieldsToArray1767586507952
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Converte colunas para text[] (PostgreSQL array type)
    // Para colunas nullable, usamos CASE para lidar com NULL
    // Para colunas não nullable, assumimos que sempre haverá um valor

    // 1. demografia_indigena_v2.situacao_no_trabalho (nullable)
    await queryRunner.query(`
      ALTER TABLE demografia_indigena_v2
      ALTER COLUMN situacao_no_trabalho TYPE text[]
      USING CASE
        WHEN situacao_no_trabalho IS NULL THEN NULL
        WHEN situacao_no_trabalho = '' THEN ARRAY[]::text[]
        ELSE ARRAY[situacao_no_trabalho]::text[]
      END;
    `);

    // 2. domicilio_indigena_v2.tipo_moradia (não nullable)
    await queryRunner.query(`
      ALTER TABLE domicilio_indigena_v2
      ALTER COLUMN tipo_moradia TYPE text[]
      USING CASE
        WHEN tipo_moradia IS NULL THEN ARRAY[]::text[]
        WHEN tipo_moradia = '' THEN ARRAY[]::text[]
        ELSE ARRAY[tipo_moradia]::text[]
      END;
    `);

    // 3. domicilio_indigena_v2.forma_coleta_esgoto (não nullable)
    await queryRunner.query(`
      ALTER TABLE domicilio_indigena_v2
      ALTER COLUMN forma_coleta_esgoto TYPE text[]
      USING CASE
        WHEN forma_coleta_esgoto IS NULL THEN ARRAY[]::text[]
        WHEN forma_coleta_esgoto = '' THEN ARRAY[]::text[]
        ELSE ARRAY[forma_coleta_esgoto]::text[]
      END;
    `);

    // 4. saude_doenca_indigena_v2.locais_impedido_de_entrar (não nullable)
    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN locais_impedido_de_entrar TYPE text[]
      USING CASE
        WHEN locais_impedido_de_entrar IS NULL THEN ARRAY[]::text[]
        WHEN locais_impedido_de_entrar = '' THEN ARRAY[]::text[]
        ELSE ARRAY[locais_impedido_de_entrar]::text[]
      END;
    `);

    // 5. saude_doenca_indigena_v2.crianca_ate_6_meses_outros_alimentos (nullable)
    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN crianca_ate_6_meses_outros_alimentos TYPE text[]
      USING CASE
        WHEN crianca_ate_6_meses_outros_alimentos IS NULL THEN NULL
        WHEN crianca_ate_6_meses_outros_alimentos = '' THEN ARRAY[]::text[]
        ELSE ARRAY[crianca_ate_6_meses_outros_alimentos]::text[]
      END;
    `);

    // 6. saude_doenca_indigena_v2.cuidadores_para_aldeia_sem_posto_de_saude (nullable)
    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN cuidadores_para_aldeia_sem_posto_de_saude TYPE text[]
      USING CASE
        WHEN cuidadores_para_aldeia_sem_posto_de_saude IS NULL THEN NULL
        WHEN cuidadores_para_aldeia_sem_posto_de_saude = '' THEN ARRAY[]::text[]
        ELSE ARRAY[cuidadores_para_aldeia_sem_posto_de_saude]::text[]
      END;
    `);

    // 7. saude_doenca_indigena_v2.profissionais_acesso_a_equipe_de_saude (nullable)
    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN profissionais_acesso_a_equipe_de_saude TYPE text[]
      USING CASE
        WHEN profissionais_acesso_a_equipe_de_saude IS NULL THEN NULL
        WHEN profissionais_acesso_a_equipe_de_saude = '' THEN ARRAY[]::text[]
        ELSE ARRAY[profissionais_acesso_a_equipe_de_saude]::text[]
      END;
    `);

    // 8. entrevistas_indigenas_v2.responsavel_documentos (nullable) - já é text, mas precisa ser text[]
    await queryRunner.query(`
      ALTER TABLE entrevistas_indigenas_v2
      ALTER COLUMN responsavel_documentos TYPE text[]
      USING CASE
        WHEN responsavel_documentos IS NULL THEN NULL
        WHEN responsavel_documentos = '' THEN ARRAY[]::text[]
        ELSE ARRAY[responsavel_documentos]::text[]
      END;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverter para text (string simples)
    // Nota: dados podem ser perdidos se houver múltiplos valores

    await queryRunner.query(`
      ALTER TABLE demografia_indigena_v2
      ALTER COLUMN situacao_no_trabalho TYPE text
      USING CASE
        WHEN situacao_no_trabalho IS NULL THEN NULL
        WHEN array_length(situacao_no_trabalho, 1) IS NULL THEN ''
        ELSE situacao_no_trabalho[1]
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE domicilio_indigena_v2
      ALTER COLUMN tipo_moradia TYPE text
      USING CASE
        WHEN array_length(tipo_moradia, 1) IS NULL THEN ''
        ELSE tipo_moradia[1]
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE domicilio_indigena_v2
      ALTER COLUMN forma_coleta_esgoto TYPE text
      USING CASE
        WHEN array_length(forma_coleta_esgoto, 1) IS NULL THEN ''
        ELSE forma_coleta_esgoto[1]
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN locais_impedido_de_entrar TYPE text
      USING CASE
        WHEN array_length(locais_impedido_de_entrar, 1) IS NULL THEN ''
        ELSE locais_impedido_de_entrar[1]
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN crianca_ate_6_meses_outros_alimentos TYPE text
      USING CASE
        WHEN crianca_ate_6_meses_outros_alimentos IS NULL THEN NULL
        WHEN array_length(crianca_ate_6_meses_outros_alimentos, 1) IS NULL THEN ''
        ELSE crianca_ate_6_meses_outros_alimentos[1]
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN cuidadores_para_aldeia_sem_posto_de_saude TYPE text
      USING CASE
        WHEN cuidadores_para_aldeia_sem_posto_de_saude IS NULL THEN NULL
        WHEN array_length(cuidadores_para_aldeia_sem_posto_de_saude, 1) IS NULL THEN ''
        ELSE cuidadores_para_aldeia_sem_posto_de_saude[1]
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN profissionais_acesso_a_equipe_de_saude TYPE text
      USING CASE
        WHEN profissionais_acesso_a_equipe_de_saude IS NULL THEN NULL
        WHEN array_length(profissionais_acesso_a_equipe_de_saude, 1) IS NULL THEN ''
        ELSE profissionais_acesso_a_equipe_de_saude[1]
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE entrevistas_indigenas_v2
      ALTER COLUMN responsavel_documentos TYPE text
      USING CASE
        WHEN responsavel_documentos IS NULL THEN NULL
        WHEN array_length(responsavel_documentos, 1) IS NULL THEN ''
        ELSE responsavel_documentos[1]
      END;
    `);
  }
}

