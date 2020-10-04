import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Person from '@modules/persons/infra/typeorm/entities/Person';

@Entity('households')
class Household {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  person_id: string;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'person_id' })
  household: Person;

  @Column()
  location_of_residence: string;

  @Column()
  homeless: string;

  @Column()
  traditional_peoples: string;

  @Column()
  which_traditional_peoples: string;

  @Column()
  household_main_person: string;

  @Column()
  reference_person_gender: string;

  @Column()
  type_of_residence: string;

  @Column({ nullable: true })
  number_of_rooms: number;

  @Column()
  construction_material: string;

  @Column()
  drinking_water: string;

  @Column()
  sewage: string;

  @Column({ nullable: true })
  number_of_people_household: number;

  @Column()
  one_person_household: boolean;

  @Column({ nullable: true })
  five_years_old_or_more: number;

  @Column({ nullable: true })
  between_6_and_18: number;

  @Column({ nullable: true })
  between_19_and_59: number;

  @Column({ nullable: true })
  sixty_years_old_or_more: number;

  @Column()
  people_invited: string;

  @Column()
  alface_acelga_repolho: boolean;

  @Column()
  couve_brocolis_almeirao_agriao_espinafre: boolean;

  @Column()
  abobora_cenoura_batata_doce_quiabo_caruru: boolean;

  @Column()
  tomate_pepino_abobrinha_berinjela_chuchu_beterraba: boolean;

  @Column()
  laranja_banana_maca_abacaxi: boolean;

  @Column()
  arroz_macarrao_polenta_cuscuz_milho_verde: boolean;

  @Column()
  feijao_ervilha_lentilha_grao_de_bico: boolean;

  @Column()
  batata_comum_mandioca_cara_inhame: boolean;

  @Column()
  ovo_frito_cozido_mexido: boolean;

  @Column()
  leite: boolean;

  @Column()
  amendoim_castanha_de_caju_ou_castanha_do_brasil_para: boolean;

  @Column()
  mamao_manga_melaoamarelo_caqui_pequi: boolean;

  @Column()
  carne_de_boi_porco_frango_peixe: boolean;

  @Column()
  soft_drink: boolean;

  @Column()
  juice_can_or_box: boolean;

  @Column()
  juice_powder: boolean;

  @Column()
  chocolate_beverage: boolean;

  @Column()
  flavored_yogurt: boolean;

  @Column()
  salty_snacks: boolean;

  @Column()
  cookies: boolean;

  @Column()
  industrialized_dessert: boolean;

  @Column()
  sausages: boolean;

  @Column()
  hot_dog_or_burguer_bread: boolean;

  @Column()
  mayonnaise_ketchup_mustard: boolean;

  @Column()
  margarine: boolean;

  @Column()
  instant_noodles_or_soup_or_frozen_food: boolean;

  @Column()
  government_assistance_program_cadastro_unico: string;

  @Column()
  government_assistance_program_bolsa_familia: string;

  @Column()
  government_assistance_program_bpc: string;

  @Column()
  pension: string;

  @Column()
  prison_cash_assistance: string;

  @Column()
  government_assistance_program_pnae: string;

  @Column()
  food_basket_assistance: string;

  @Column()
  low_income_restaurants: string;

  @Column()
  covid_cash_assistance: string;

  @Column({ nullable: true })
  covid_cash_assistance_number_of_times: number;

  @Column()
  charity: string;

  @Column()
  type_of_charity: string;

  @Column()
  embarassement: string;

  @Column()
  home_grown: string;

  @Column()
  food_for_market: string;

  @Column()
  market_profile: string;

  @Column()
  difficulty_selling_food: string;

  @Column()
  could_not_sell_food: string;

  @Column()
  income_unknown: boolean;

  @Column({ nullable: true })
  family_income: number;

  @Column()
  job_loss: boolean;

  @Column()
  salary_reduction: boolean;

  @Column()
  financial_support: boolean;

  @Column()
  debt: boolean;

  @Column()
  cut_costs: boolean;

  @Column()
  cut_non_essential_costs: boolean;

  @Column()
  ns_nr_work_salary: boolean;

  @Column()
  worried_food_supply: string;

  @Column()
  lack_food_supply: string;

  @Column()
  afford_healthy_food: string;

  @Column()
  poor_food_choice: string;

  @Column()
  adult_meals: string;

  @Column()
  adult_food_privation: string;

  @Column()
  adult_hunger: string;

  @Column()
  adult_one_meal_or_none: string;

  @Column()
  how_food_is_obtained: string;

  @Column()
  food_price_change: string;

  @Column()
  food_profile_change: string;

  @Column()
  food_store_type: string;

  @Column()
  food_expenditure: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Household;
