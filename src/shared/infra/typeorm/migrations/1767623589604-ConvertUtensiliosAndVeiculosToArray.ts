import { MigrationInterface, QueryRunner } from 'typeorm';

export class ConvertUtensiliosAndVeiculosToArray1767623589604
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Converte utensilios_casa, utensilios_de_trabalho, veiculos e destino_lixo_da_residencia para text[]
    // Esses campos estavam como varchar mas a entidade TypeORM espera arrays
    // Os dados existentes podem estar em formato string que precisa ser convertido

    await queryRunner.query(`
      ALTER TABLE domicilio_indigena_v2 
      ALTER COLUMN utensilios_casa TYPE text[] 
      USING CASE 
        WHEN utensilios_casa IS NULL THEN ARRAY[]::text[]
        WHEN utensilios_casa = '' THEN ARRAY[]::text[]
        WHEN utensilios_casa LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(utensilios_casa, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(utensilios_casa, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE domicilio_indigena_v2 
      ALTER COLUMN utensilios_de_trabalho TYPE text[] 
      USING CASE 
        WHEN utensilios_de_trabalho IS NULL THEN ARRAY[]::text[]
        WHEN utensilios_de_trabalho = '' THEN ARRAY[]::text[]
        WHEN utensilios_de_trabalho LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(utensilios_de_trabalho, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(utensilios_de_trabalho, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE domicilio_indigena_v2 
      ALTER COLUMN veiculos TYPE text[] 
      USING CASE 
        WHEN veiculos IS NULL THEN ARRAY[]::text[]
        WHEN veiculos = '' THEN ARRAY[]::text[]
        WHEN veiculos LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(veiculos, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(veiculos, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE domicilio_indigena_v2 
      ALTER COLUMN destino_lixo_da_residencia TYPE text[] 
      USING CASE 
        WHEN destino_lixo_da_residencia IS NULL THEN ARRAY[]::text[]
        WHEN destino_lixo_da_residencia = '' THEN ARRAY[]::text[]
        WHEN destino_lixo_da_residencia LIKE '{%}' THEN 
          string_to_array(REPLACE(REPLACE(REPLACE(destino_lixo_da_residencia, '{', ''), '}', ''), '"', ''), ',')
        ELSE string_to_array(destino_lixo_da_residencia, ',')
      END;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverter para varchar (convertendo array para string separada por vírgulas)
    await queryRunner.query(`
      ALTER TABLE domicilio_indigena_v2
      ALTER COLUMN utensilios_casa TYPE varchar
      USING CASE
        WHEN array_length(utensilios_casa, 1) IS NULL THEN ''
        ELSE array_to_string(utensilios_casa, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE domicilio_indigena_v2
      ALTER COLUMN utensilios_de_trabalho TYPE varchar
      USING CASE
        WHEN array_length(utensilios_de_trabalho, 1) IS NULL THEN ''
        ELSE array_to_string(utensilios_de_trabalho, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE domicilio_indigena_v2
      ALTER COLUMN veiculos TYPE varchar
      USING CASE
        WHEN array_length(veiculos, 1) IS NULL THEN ''
        ELSE array_to_string(veiculos, ',')
      END;
    `);

    await queryRunner.query(`
      ALTER TABLE domicilio_indigena_v2
      ALTER COLUMN destino_lixo_da_residencia TYPE varchar
      USING CASE
        WHEN array_length(destino_lixo_da_residencia, 1) IS NULL THEN ''
        ELSE array_to_string(destino_lixo_da_residencia, ',')
      END;
    `);
  }
}
