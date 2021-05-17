import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateHouseholds1621210451993 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'households',
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
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'local_do_domicilio',
            type: 'varchar',
          },
          {
            name: 'morador_de_rua',
            type: 'varchar',
          },
          {
            name: 'povos_tradicionais',
            type: 'varchar',
          },
          {
            name: 'qual_povo_tradicional',
            type: 'varchar',
          },
          {
            name: 'pessoa_de_referencia',
            type: 'varchar',
          },
          {
            name: 'idade_pessoa_de_referencia',
            type: 'integer',
          },
          {
            name: 'sexo_pessoa_de_referencia',
            type: 'varchar',
          },
          {
            name: 'raca_cor',
            type: 'varchar',
          },
          {
            name: 'ler_escrever',
            type: 'varchar',
          },
          {
            name: 'escolaridade',
            type: 'varchar',
          },
          {
            name: 'situacao_de_trabalho',
            type: 'varchar',
          },
          {
            name: 'ocupacao_profissional',
            type: 'varchar',
          },
          {
            name: 'local_de_trabalho',
            type: 'varchar',
          },
          {
            name: 'covid_2020',
            type: 'varchar',
          },
          {
            name: 'covid_perda_2020',
            type: 'varchar',
          },
          {
            name: 'covid_2021',
            type: 'varchar',
          },
          {
            name: 'covid_perda_2021',
            type: 'varchar',
          },
          {
            name: 'tipo_de_residencia',
            type: 'varchar',
          },
          {
            name: 'numero_de_comodos',
            type: 'integer',
          },
          {
            name: 'material_de_construcao',
            type: 'varchar',
          },
          {
            name: 'agua_potavel',
            type: 'varchar',
          },
          {
            name: 'agua_animais',
            type: 'varchar',
          },
          {
            name: 'agua_producao_alimentos',
            type: 'varchar',
          },
          {
            name: 'esgoto',
            type: 'varchar',
          },
          {
            name: 'numero_de_pessoas',
            type: 'integer',
          },
          {
            name: 'uma_pessoa_domicilio',
            type: 'boolean',
          },
          {
            name: 'cinco_anos_ou_mais',
            type: 'integer',
          },
          {
            name: 'entre_6_e_18',
            type: 'integer',
          },
          {
            name: 'entre_19_e_59',
            type: 'integer',
          },
          {
            name: 'sessenta_anos_ou_mais',
            type: 'integer',
          },
          {
            name: 'pessoas_convidadas',
            type: 'varchar',
          },

          {
            name: 'nao_sabe_renda',
            type: 'boolean',
          },
          {
            name: 'renda_familiar',
            type: 'integer',
          },
          {
            name: 'faixa_de_renda',
            type: 'varchar',
          },
          {
            name: 'perda_de_emprego',
            type: 'boolean',
          },
          {
            name: 'reducao_de_salario',
            type: 'boolean',
          },
          {
            name: 'ajuda_financeira',
            type: 'boolean',
          },
          {
            name: 'divida',
            type: 'boolean',
          },
          {
            name: 'corte_de_gastos',
            type: 'boolean',
          },
          {
            name: 'corte_de_gastos_nao_essenciais',
            type: 'boolean',
          },
          {
            name: 'ns_nr_trabalho',
            type: 'boolean',
          },
          {
            name: 'educacao_basica_publica',
            type: 'varchar',
          },
          {
            name: 'pnae',
            type: 'varchar',
          },
          {
            name: 'cadastro_unico',
            type: 'varchar',
          },
          {
            name: 'bolsa_familia',
            type: 'varchar',
          },
          {
            name: 'bpc',
            type: 'varchar',
          },
          {
            name: 'pensao',
            type: 'varchar',
          },
          {
            name: 'auxilio_reclusao',
            type: 'varchar',
          },
          {
            name: 'cesta_de_alimentos',
            type: 'varchar',
          },
          {
            name: 'restaurantes_populares',
            type: 'varchar',
          },
          {
            name: 'auxilio_emergencial',
            type: 'varchar',
          },
          {
            name: 'auxilio_vezes',
            type: 'integer',
          },
          {
            name: 'ajuda_instituicao_caridade',
            type: 'varchar',
          },
          {
            name: 'tipo_de_ajuda',
            type: 'varchar',
          },
          {
            name: 'vergonha',
            type: 'varchar',
          },
          {
            name: 'produz_alimento',
            type: 'varchar',
          },
          {
            name: 'alimento_para_venda',
            type: 'varchar',
          },
          {
            name: 'divisao_alimento',
            type: 'varchar',
          },
          {
            name: 'dificuldade_venda',
            type: 'varchar',
          },
          {
            name: 'nao_vendeu',
            type: 'varchar',
          },

          {
            name: 'preocupacao_alimentos',
            type: 'varchar',
          },
          {
            name: 'alimentos_acabaram',
            type: 'varchar',
          },
          {
            name: 'alimentos_saudaveis',
            type: 'varchar',
          },
          {
            name: 'alimentos_poucos_tipos',
            type: 'varchar',
          },
          {
            name: 'refeicoes_adulto',
            type: 'varchar',
          },
          {
            name: 'adulto_comeu_menos',
            type: 'varchar',
          },
          {
            name: 'adulto_fome',
            type: 'varchar',
          },
          {
            name: 'adulto_uma_refeicao',
            type: 'varchar',
          },
          {
            name: 'como_adquiriu_comida',
            type: 'varchar',
          },
          {
            name: 'alteracao_preco_comidas',
            type: 'varchar',
          },
          {
            name: 'perfil_de_compra',
            type: 'varchar',
          },
          {
            name: 'mercado',
            type: 'varchar',
          },
          {
            name: 'gastos_alimentacao',
            type: 'varchar',
          },
          {
            name: 'feijao',
            type: 'boolean',
          },
          {
            name: 'arroz',
            type: 'boolean',
          },
          {
            name: 'carnes',
            type: 'boolean',
          },
          {
            name: 'verduras_legumes',
            type: 'boolean',
          },
          {
            name: 'frutas_frescas',
            type: 'boolean',
          },
          {
            name: 'leite',
            type: 'boolean',
          },
          {
            name: 'hamburguer_embutidos',
            type: 'boolean',
          },
          {
            name: 'bebidas_adocadas',
            type: 'boolean',
          },
          {
            name: 'macarrao_instantaneo_salgadinhos_de_pacote_biscoitos_salgados',
            type: 'boolean',
          },
          {
            name: 'biscoito_recheado_doces_guloseimas',
            type: 'boolean',
          },
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
    await queryRunner.createForeignKey(
      'households',
      new TableForeignKey({
        name: 'Resident',
        columnNames: ['person_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'persons',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('households', 'Resident');
    await queryRunner.dropTable('households');
  }

}
