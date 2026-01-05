import { MigrationInterface, QueryRunner } from 'typeorm';

export class ConvertRemainingMultiSelectFieldsToArray1767624568080
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Converte todos os campos multi-select restantes para text[]
    // Esses campos estavam como varchar/text mas a entidade TypeORM espera arrays

    // 1. demografia_indigena_v2.povo_etnia (nullable)
    await queryRunner.query(`
      ALTER TABLE demografia_indigena_v2 
      ALTER COLUMN povo_etnia TYPE text[] 
      USING CASE 
        WHEN povo_etnia IS NULL THEN NULL
        WHEN povo_etnia = '' THEN ARRAY[]::text[]
        WHEN povo_etnia LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(povo_etnia, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(povo_etnia, ',')
      END;
    `);

    // 2. saude_doenca_indigena_v2 - campos não nullable
    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2 
      ALTER COLUMN morador_com_desabilidade TYPE text[] 
      USING CASE 
        WHEN morador_com_desabilidade IS NULL THEN ARRAY[]::text[]
        WHEN morador_com_desabilidade = '' THEN ARRAY[]::text[]
        WHEN morador_com_desabilidade LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(morador_com_desabilidade, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(morador_com_desabilidade, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2 
      ALTER COLUMN morador_exposto_veneno_lavoura TYPE text[] 
      USING CASE 
        WHEN morador_exposto_veneno_lavoura IS NULL THEN ARRAY[]::text[]
        WHEN morador_exposto_veneno_lavoura = '' THEN ARRAY[]::text[]
        WHEN morador_exposto_veneno_lavoura LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(morador_exposto_veneno_lavoura, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(morador_exposto_veneno_lavoura, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2 
      ALTER COLUMN acidentes TYPE text[] 
      USING CASE 
        WHEN acidentes IS NULL THEN ARRAY[]::text[]
        WHEN acidentes = '' THEN ARRAY[]::text[]
        WHEN acidentes LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(acidentes, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(acidentes, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2 
      ALTER COLUMN ocorrencia_de_ameacas TYPE text[] 
      USING CASE 
        WHEN ocorrencia_de_ameacas IS NULL THEN ARRAY[]::text[]
        WHEN ocorrencia_de_ameacas = '' THEN ARRAY[]::text[]
        WHEN ocorrencia_de_ameacas LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(ocorrencia_de_ameacas, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(ocorrencia_de_ameacas, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2 
      ALTER COLUMN ocorrencia_violencia_fisica TYPE text[] 
      USING CASE 
        WHEN ocorrencia_violencia_fisica IS NULL THEN ARRAY[]::text[]
        WHEN ocorrencia_violencia_fisica = '' THEN ARRAY[]::text[]
        WHEN ocorrencia_violencia_fisica LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(ocorrencia_violencia_fisica, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(ocorrencia_violencia_fisica, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2 
      ALTER COLUMN lista_diagnosticos TYPE text[] 
      USING CASE 
        WHEN lista_diagnosticos IS NULL THEN ARRAY[]::text[]
        WHEN lista_diagnosticos = '' THEN ARRAY[]::text[]
        WHEN lista_diagnosticos LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(lista_diagnosticos, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(lista_diagnosticos, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2 
      ALTER COLUMN lista_diagnosticos_outros TYPE text[] 
      USING CASE 
        WHEN lista_diagnosticos_outros IS NULL THEN ARRAY[]::text[]
        WHEN lista_diagnosticos_outros = '' THEN ARRAY[]::text[]
        WHEN lista_diagnosticos_outros LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(lista_diagnosticos_outros, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(lista_diagnosticos_outros, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2 
      ALTER COLUMN lista_diagnosticos_doencas_infecciosas TYPE text[] 
      USING CASE 
        WHEN lista_diagnosticos_doencas_infecciosas IS NULL THEN ARRAY[]::text[]
        WHEN lista_diagnosticos_doencas_infecciosas = '' THEN ARRAY[]::text[]
        WHEN lista_diagnosticos_doencas_infecciosas LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(lista_diagnosticos_doencas_infecciosas, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(lista_diagnosticos_doencas_infecciosas, ',')
      END;
    `);

    // saude_doenca_indigena_v2 - campos nullable
    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2 
      ALTER COLUMN motivo_doencas_contato_veneno_lavoura TYPE text[] 
      USING CASE 
        WHEN motivo_doencas_contato_veneno_lavoura IS NULL THEN NULL
        WHEN motivo_doencas_contato_veneno_lavoura = '' THEN ARRAY[]::text[]
        WHEN motivo_doencas_contato_veneno_lavoura LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(motivo_doencas_contato_veneno_lavoura, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(motivo_doencas_contato_veneno_lavoura, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2 
      ALTER COLUMN mulheres_e_gestacao TYPE text[] 
      USING CASE 
        WHEN mulheres_e_gestacao IS NULL THEN NULL
        WHEN mulheres_e_gestacao = '' THEN ARRAY[]::text[]
        WHEN mulheres_e_gestacao LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(mulheres_e_gestacao, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(mulheres_e_gestacao, ',')
      END;
    `);

    // 3. alimentacao_nutricao_indigena_v2 - campos não nullable
    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2 
      ALTER COLUMN coleta_castanhas_cocos_frutas TYPE text[] 
      USING CASE 
        WHEN coleta_castanhas_cocos_frutas IS NULL THEN ARRAY[]::text[]
        WHEN coleta_castanhas_cocos_frutas = '' THEN ARRAY[]::text[]
        WHEN coleta_castanhas_cocos_frutas LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(coleta_castanhas_cocos_frutas, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(coleta_castanhas_cocos_frutas, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2 
      ALTER COLUMN alimentos_consumidos_dia_anterior TYPE text[] 
      USING CASE 
        WHEN alimentos_consumidos_dia_anterior IS NULL THEN ARRAY[]::text[]
        WHEN alimentos_consumidos_dia_anterior = '' THEN ARRAY[]::text[]
        WHEN alimentos_consumidos_dia_anterior LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(alimentos_consumidos_dia_anterior, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(alimentos_consumidos_dia_anterior, ',')
      END;
    `);

    // alimentacao_nutricao_indigena_v2 - campos nullable
    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2 
      ALTER COLUMN motivo_morador_nao_faz_horta TYPE text[] 
      USING CASE 
        WHEN motivo_morador_nao_faz_horta IS NULL THEN NULL
        WHEN motivo_morador_nao_faz_horta = '' THEN ARRAY[]::text[]
        WHEN motivo_morador_nao_faz_horta LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(motivo_morador_nao_faz_horta, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(motivo_morador_nao_faz_horta, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2 
      ALTER COLUMN alimentos_da_horta TYPE text[] 
      USING CASE 
        WHEN alimentos_da_horta IS NULL THEN NULL
        WHEN alimentos_da_horta = '' THEN ARRAY[]::text[]
        WHEN alimentos_da_horta LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(alimentos_da_horta, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(alimentos_da_horta, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2 
      ALTER COLUMN funcao_cultivo_horta TYPE text[] 
      USING CASE 
        WHEN funcao_cultivo_horta IS NULL THEN NULL
        WHEN funcao_cultivo_horta = '' THEN ARRAY[]::text[]
        WHEN funcao_cultivo_horta LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(funcao_cultivo_horta, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(funcao_cultivo_horta, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2 
      ALTER COLUMN origem_semente_plantio TYPE text[] 
      USING CASE 
        WHEN origem_semente_plantio IS NULL THEN NULL
        WHEN origem_semente_plantio = '' THEN ARRAY[]::text[]
        WHEN origem_semente_plantio LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(origem_semente_plantio, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(origem_semente_plantio, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2 
      ALTER COLUMN lista_dificuldades_com_horta TYPE text[] 
      USING CASE 
        WHEN lista_dificuldades_com_horta IS NULL THEN NULL
        WHEN lista_dificuldades_com_horta = '' THEN ARRAY[]::text[]
        WHEN lista_dificuldades_com_horta LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(lista_dificuldades_com_horta, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(lista_dificuldades_com_horta, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2 
      ALTER COLUMN lista_animais_de_criacao_alimentacao_ou_venda TYPE text[] 
      USING CASE 
        WHEN lista_animais_de_criacao_alimentacao_ou_venda IS NULL THEN NULL
        WHEN lista_animais_de_criacao_alimentacao_ou_venda = '' THEN ARRAY[]::text[]
        WHEN lista_animais_de_criacao_alimentacao_ou_venda LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(lista_animais_de_criacao_alimentacao_ou_venda, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(lista_animais_de_criacao_alimentacao_ou_venda, ',')
      END;
    `);

    // 4. apoio_protecao_indigena_v2.recebeu_cesta_alimentos (nullable)
    await queryRunner.query(`
      ALTER TABLE apoio_protecao_indigena_v2 
      ALTER COLUMN recebeu_cesta_alimentos TYPE text[] 
      USING CASE 
        WHEN recebeu_cesta_alimentos IS NULL THEN NULL
        WHEN recebeu_cesta_alimentos = '' THEN ARRAY[]::text[]
        WHEN recebeu_cesta_alimentos LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(recebeu_cesta_alimentos, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(recebeu_cesta_alimentos, ',')
      END;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverter para varchar/text (convertendo array para string separada por vírgulas)
    
    await queryRunner.query(`
      ALTER TABLE demografia_indigena_v2
      ALTER COLUMN povo_etnia TYPE varchar
      USING CASE
        WHEN povo_etnia IS NULL THEN NULL
        WHEN array_length(povo_etnia, 1) IS NULL THEN ''
        ELSE array_to_string(povo_etnia, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN morador_com_desabilidade TYPE varchar
      USING CASE
        WHEN array_length(morador_com_desabilidade, 1) IS NULL THEN ''
        ELSE array_to_string(morador_com_desabilidade, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN morador_exposto_veneno_lavoura TYPE varchar
      USING CASE
        WHEN array_length(morador_exposto_veneno_lavoura, 1) IS NULL THEN ''
        ELSE array_to_string(morador_exposto_veneno_lavoura, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN motivo_doencas_contato_veneno_lavoura TYPE varchar
      USING CASE
        WHEN motivo_doencas_contato_veneno_lavoura IS NULL THEN NULL
        WHEN array_length(motivo_doencas_contato_veneno_lavoura, 1) IS NULL THEN ''
        ELSE array_to_string(motivo_doencas_contato_veneno_lavoura, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN acidentes TYPE varchar
      USING CASE
        WHEN array_length(acidentes, 1) IS NULL THEN ''
        ELSE array_to_string(acidentes, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN ocorrencia_de_ameacas TYPE varchar
      USING CASE
        WHEN array_length(ocorrencia_de_ameacas, 1) IS NULL THEN ''
        ELSE array_to_string(ocorrencia_de_ameacas, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN ocorrencia_violencia_fisica TYPE varchar
      USING CASE
        WHEN array_length(ocorrencia_violencia_fisica, 1) IS NULL THEN ''
        ELSE array_to_string(ocorrencia_violencia_fisica, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN lista_diagnosticos TYPE varchar
      USING CASE
        WHEN array_length(lista_diagnosticos, 1) IS NULL THEN ''
        ELSE array_to_string(lista_diagnosticos, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN lista_diagnosticos_outros TYPE varchar
      USING CASE
        WHEN array_length(lista_diagnosticos_outros, 1) IS NULL THEN ''
        ELSE array_to_string(lista_diagnosticos_outros, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN mulheres_e_gestacao TYPE varchar
      USING CASE
        WHEN mulheres_e_gestacao IS NULL THEN NULL
        WHEN array_length(mulheres_e_gestacao, 1) IS NULL THEN ''
        ELSE array_to_string(mulheres_e_gestacao, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE saude_doenca_indigena_v2
      ALTER COLUMN lista_diagnosticos_doencas_infecciosas TYPE varchar
      USING CASE
        WHEN array_length(lista_diagnosticos_doencas_infecciosas, 1) IS NULL THEN ''
        ELSE array_to_string(lista_diagnosticos_doencas_infecciosas, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2
      ALTER COLUMN motivo_morador_nao_faz_horta TYPE varchar
      USING CASE
        WHEN motivo_morador_nao_faz_horta IS NULL THEN NULL
        WHEN array_length(motivo_morador_nao_faz_horta, 1) IS NULL THEN ''
        ELSE array_to_string(motivo_morador_nao_faz_horta, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2
      ALTER COLUMN alimentos_da_horta TYPE varchar
      USING CASE
        WHEN alimentos_da_horta IS NULL THEN NULL
        WHEN array_length(alimentos_da_horta, 1) IS NULL THEN ''
        ELSE array_to_string(alimentos_da_horta, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2
      ALTER COLUMN coleta_castanhas_cocos_frutas TYPE varchar
      USING CASE
        WHEN array_length(coleta_castanhas_cocos_frutas, 1) IS NULL THEN ''
        ELSE array_to_string(coleta_castanhas_cocos_frutas, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2
      ALTER COLUMN funcao_cultivo_horta TYPE varchar
      USING CASE
        WHEN funcao_cultivo_horta IS NULL THEN NULL
        WHEN array_length(funcao_cultivo_horta, 1) IS NULL THEN ''
        ELSE array_to_string(funcao_cultivo_horta, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2
      ALTER COLUMN origem_semente_plantio TYPE varchar
      USING CASE
        WHEN origem_semente_plantio IS NULL THEN NULL
        WHEN array_length(origem_semente_plantio, 1) IS NULL THEN ''
        ELSE array_to_string(origem_semente_plantio, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2
      ALTER COLUMN lista_dificuldades_com_horta TYPE varchar
      USING CASE
        WHEN lista_dificuldades_com_horta IS NULL THEN NULL
        WHEN array_length(lista_dificuldades_com_horta, 1) IS NULL THEN ''
        ELSE array_to_string(lista_dificuldades_com_horta, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2
      ALTER COLUMN lista_animais_de_criacao_alimentacao_ou_venda TYPE varchar
      USING CASE
        WHEN lista_animais_de_criacao_alimentacao_ou_venda IS NULL THEN NULL
        WHEN array_length(lista_animais_de_criacao_alimentacao_ou_venda, 1) IS NULL THEN ''
        ELSE array_to_string(lista_animais_de_criacao_alimentacao_ou_venda, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE alimentacao_nutricao_indigena_v2
      ALTER COLUMN alimentos_consumidos_dia_anterior TYPE varchar
      USING CASE
        WHEN array_length(alimentos_consumidos_dia_anterior, 1) IS NULL THEN ''
        ELSE array_to_string(alimentos_consumidos_dia_anterior, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE apoio_protecao_indigena_v2
      ALTER COLUMN recebeu_cesta_alimentos TYPE text
      USING CASE
        WHEN recebeu_cesta_alimentos IS NULL THEN NULL
        WHEN array_length(recebeu_cesta_alimentos, 1) IS NULL THEN ''
        ELSE array_to_string(recebeu_cesta_alimentos, ',')
      END;
    `);
  }
}
