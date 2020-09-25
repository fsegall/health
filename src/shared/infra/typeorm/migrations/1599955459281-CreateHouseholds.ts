import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateHouseholds1599955459281 implements MigrationInterface {

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
            name: 'location_of_residence',
            type: 'varchar',
          },
          {
            name: 'homeless',
            type: 'varchar',
          },
          {
            name: 'traditional_peoples',
            type: 'varchar',
          },
          {
            name: 'which_traditional_peoples',
            type: 'varchar',
          },
          {
            name: 'household_main_person',
            type: 'varchar',
          },
          {
            name: 'type_of_residence',
            type: 'varchar',
          },
          {
            name: 'number_of_rooms',
            type: 'integer',
          },
          {
            name: 'construction_material',
            type: 'varchar',
          },
          {
            name: 'drinking_water',
            type: 'varchar',
          },
          {
            name: 'sewage',
            type: 'varchar',
          },
          {
            name: 'number_of_people_household',
            type: 'integer',
          },
          {
            name: 'one_person_household',
            type: 'boolean',
          },
          {
            name: 'five_years_old_or_more',
            type: 'integer',
          },
          {
            name: 'between_6_and_18',
            type: 'integer',
          },
          {
            name: 'between_19_and_59',
            type: 'integer',
          },
          {
            name: 'sixty_years_old_or_more',
            type: 'integer',
          },
          {
            name: 'people_invited',
            type: 'varchar',
          },
          {
            name: 'alface_acelga_repolho',
            type: 'boolean',
          },
          {
            name: 'couve_brocolis_almeirao_agriao_espinafre',
            type: 'boolean',
          },
          {
            name: 'abobora_cenoura_batata_doce_quiabo_caruru',
            type: 'boolean',
          },
          {
            name: 'tomate_pepino_abobrinha_berinjela_chuchu_beterraba',
            type: 'boolean',
          },
          {
            name: 'laranja_banana_maca_abacaxi',
            type: 'boolean',
          },
          {
            name: 'arroz_macarrao_polenta_cuscuz_milho_verde',
            type: 'boolean',
          },
          {
            name: 'feijao_ervilha_lentilha_grao_de_bico',
            type: 'boolean',
          },
          {
            name: 'batata_comum_mandioca_cara_inhame',
            type: 'boolean',
          },
          {
            name: 'ovo_frito_cozido_mexido',
            type: 'boolean',
          },
          {
            name: 'leite',
            type: 'boolean',
          },
          {
            name: 'amendoim_castanha_de_caju_ou_castanha_do_brasil_para',
            type: 'boolean',
          },
          {
            name: 'soft_drink',
            type: 'boolean',
          },
          {
            name: 'juice_can_or_box',
            type: 'boolean',
          },
          {
            name: 'juice_powder',
            type: 'boolean',
          },
          {
            name: 'chocolate_beverage',
            type: 'boolean',
          },
          {
            name: 'flavored_yogurt',
            type: 'boolean',
          },
          {
            name: 'salty_snacks',
            type: 'boolean',
          },
          {
            name: 'cookies',
            type: 'boolean',
          },
          {
            name: 'industrialized_dessert',
            type: 'boolean',
          },
          {
            name: 'sausages',
            type: 'boolean',
          },
          {
            name: 'hot_dog_or_burguer_bread',
            type: 'boolean',
          },
          {
            name: 'mayonnaise_ketchup_mustard',
            type: 'boolean',
          },
          {
            name: 'margarine',
            type: 'boolean',
          },
          {
            name: 'instant_noodles_or_soup_or_frozen_food',
            type: 'boolean',
          },
          {
            name: 'government_assistance_program_cadastro_unico',
            type: 'varchar',
          },
          {
            name: 'government_assistance_program_bolsa_familia',
            type: 'varchar',
          }, {
            name: 'government_assistance_program_bpc',
            type: 'varchar',
          }, {
            name: 'pension',
            type: 'varchar',
          }, {
            name: 'prison_cash_assistance',
            type: 'varchar',
          }, {
            name: 'government_assistance_program_pnae',
            type: 'varchar',
          }, {
            name: 'food_basket_assistance',
            type: 'varchar',
          }, {
            name: 'low_income_restaurants',
            type: 'varchar',
          }, {
            name: 'covid_cash_assistance',
            type: 'varchar',
          }, {
            name: 'covid_cash_assistance_number_of_times',
            type: 'integer',
          }, {
            name: 'charity',
            type: 'varchar',
          },
          {
            name: 'type_of_charity',
            type: 'varchar',
          },
          {
            name: 'embarassement',
            type: 'varchar',
          },
          {
            name: 'home_grown',
            type: 'varchar',
          },
          {
            name: 'food_for_market',
            type: 'varchar',
          },
          {
            name: 'market_profile',
            type: 'varchar',
          },
          {
            name: 'difficulty_selling_food',
            type: 'varchar',
          },
          {
            name: 'could_not_sell_food',
            type: 'varchar',
          },
          {
            name: 'income_unknown',
            type: 'boolean',
          },
          {
            name: 'family_income',
            type: 'integer',
          },
          {
            name: 'job_loss',
            type: 'boolean',
          },
          {
            name: 'salary_reduction',
            type: 'boolean',
          },
          {
            name: 'financial_support',
            type: 'boolean',
          },
          {
            name: 'debt',
            type: 'boolean',
          },
          {
            name: 'cut_costs',
            type: 'boolean',
          },
          {
            name: 'cut_non_essential_costs',
            type: 'boolean',
          },
          {
            name: 'worried_food_supply',
            type: 'varchar',
          },
          {
            name: 'lack_food_supply',
            type: 'varchar',
          },
          {
            name: 'afford_healthy_food',
            type: 'varchar',
          },
          {
            name: 'poor_food_choice',
            type: 'varchar',
          },
          {
            name: 'adult_meals',
            type: 'varchar',
          },
          {
            name: 'adult_food_privation',
            type: 'varchar',
          },
          {
            name: 'adult_hunger',
            type: 'varchar',
          },
          {
            name: 'adult_one_meal_or_none',
            type: 'varchar',
          },
          {
            name: 'how_food_is_obtained',
            type: 'varchar',
          },
          {
            name: 'food_price_change',
            type: 'varchar',
          },
          {
            name: 'food_profile_change',
            type: 'varchar',
          },
          {
            name: 'food_store_type',
            type: 'varchar',
          },
          {
            name: 'food_expenditure',
            type: 'varchar',
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
