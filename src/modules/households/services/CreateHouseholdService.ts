import Household from '../infra/typeorm/entities/Household';
import { injectable, inject } from 'tsyringe';
import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  person_id: string;
  location_of_residence: string;
  homeless: string;
  traditional_peoples: string;
  which_traditional_peoples: string;
  household_main_person: string;
  type_of_residence: string;
  number_of_rooms: number;
  construction_material: string;
  drinking_water: string;
  sewage: string;
  number_of_people_household: number;
  one_person_household: boolean;
  five_years_old_or_more: number;
  between_6_and_18: number;
  between_19_and_59: number;
  sixty_years_old_or_more: number;
  people_invited: string;
  alface_acelga_repolho: boolean;
  couve_brocolis_almeirao_agriao_espinafre: boolean;
  abobora_cenoura_batata_doce_quiabo_caruru: boolean;
  tomate_pepino_abobrinha_berinjela_chuchu_beterraba: boolean;
  laranja_banana_maca_abacaxi: boolean;
  arroz_macarrao_polenta_cuscuz_milho_verde: boolean;
  feijao_ervilha_lentilha_grao_de_bico: boolean;
  batata_comum_mandioca_cara_inhame: boolean;
  ovo_frito_cozido_mexido: boolean;
  leite: boolean;
  amendoim_castanha_de_caju_ou_castanha_do_brasil_para: boolean;
  soft_drink: boolean;
  juice_can_or_box: boolean;
  juice_powder: boolean;
  chocolate_beverage: boolean;
  flavored_yogurt: boolean;
  salty_snacks: boolean;
  cookies: boolean;
  industrialized_dessert: boolean;
  sausages: boolean;
  hot_dog_or_burguer_bread: boolean;
  mayonnaise_ketchup_mustard: boolean;
  margarine: boolean;
  instant_noodles_or_soup_or_frozen_food: boolean;
  government_assistance_program_cadastro_unico: string;
  government_assistance_program_bolsa_familia: string;
  government_assistance_program_bpc: string;
  pension: string;
  prison_cash_assistance: string;
  government_assistance_program_pnae: string;
  food_basket_assistance: string;
  low_income_restaurants: string;
  covid_cash_assistance: string;
  covid_cash_assistance_number_of_times: number;
  charity: string;
  type_of_charity: string;
  embarassement: string;
  home_grown: string;
  food_for_market: string;
  market_profile: string;
  difficulty_selling_food: string;
  could_not_sell_food: string;
  income_unkown: boolean;
  family_income: number;
  worried_food_supply: string;
  lack_food_supply: string;
  afford_healthy_food: string;
  poor_food_choice: string;
  adult_meals: string;
  adult_food_privation: string;
  adult_hunger: string;
  adult_one_meal_or_none: string;
  how_food_is_obtained: string;
  food_price_change: string;
  food_profile_change: string;
  food_store_type: string;
  food_expenditure: string;
}

@injectable()
export default class CreateHouseholdService {
  constructor(
    @inject('HouseholdsRepository')
    private householdsRepository: IHouseholdsRepository,
  ) { }
  public async execute({
    person_id,
    location_of_residence,
    homeless,
    traditional_peoples,
    which_traditional_peoples,
    household_main_person,
    type_of_residence,
    number_of_rooms,
    construction_material,
    drinking_water,
    sewage,
    number_of_people_household,
    one_person_household,
    five_years_old_or_more,
    between_6_and_18,
    between_19_and_59,
    sixty_years_old_or_more,
    people_invited,
    alface_acelga_repolho,
    couve_brocolis_almeirao_agriao_espinafre,
    abobora_cenoura_batata_doce_quiabo_caruru,
    tomate_pepino_abobrinha_berinjela_chuchu_beterraba,
    laranja_banana_maca_abacaxi,
    arroz_macarrao_polenta_cuscuz_milho_verde,
    feijao_ervilha_lentilha_grao_de_bico,
    batata_comum_mandioca_cara_inhame,
    ovo_frito_cozido_mexido,
    leite,
    amendoim_castanha_de_caju_ou_castanha_do_brasil_para,
    soft_drink,
    juice_can_or_box,
    juice_powder,
    chocolate_beverage,
    flavored_yogurt,
    salty_snacks,
    cookies,
    industrialized_dessert,
    sausages,
    hot_dog_or_burguer_bread,
    mayonnaise_ketchup_mustard,
    margarine,
    instant_noodles_or_soup_or_frozen_food,
    government_assistance_program_cadastro_unico,
    government_assistance_program_bolsa_familia,
    government_assistance_program_bpc,
    pension,
    prison_cash_assistance,
    government_assistance_program_pnae,
    food_basket_assistance,
    low_income_restaurants,
    covid_cash_assistance,
    covid_cash_assistance_number_of_times,
    charity,
    type_of_charity,
    embarassement,
    home_grown,
    food_for_market,
    market_profile,
    difficulty_selling_food,
    could_not_sell_food,
    income_unkown,
    family_income,
    worried_food_supply,
    lack_food_supply,
    afford_healthy_food,
    poor_food_choice,
    adult_meals,
    adult_food_privation,
    adult_hunger,
    adult_one_meal_or_none,
    how_food_is_obtained,
    food_price_change,
    food_profile_change,
    food_store_type,
    food_expenditure,
  }: IRequest): Promise<Household> {
    const hasHousehold = await this.householdsRepository.findByPerson(
      person_id,
    );

    if (hasHousehold) {
      throw new AppError(
        'This person already has a household. Please delete or update it.',
      );
    }
    const household: Household = await this.householdsRepository.create({
      person_id,
      location_of_residence,
      homeless,
      traditional_peoples,
      which_traditional_peoples,
      household_main_person,
      type_of_residence,
      number_of_rooms,
      construction_material,
      drinking_water,
      sewage,
      number_of_people_household,
      one_person_household,
      five_years_old_or_more,
      between_6_and_18,
      between_19_and_59,
      sixty_years_old_or_more,
      people_invited,
      alface_acelga_repolho,
      couve_brocolis_almeirao_agriao_espinafre,
      abobora_cenoura_batata_doce_quiabo_caruru,
      tomate_pepino_abobrinha_berinjela_chuchu_beterraba,
      laranja_banana_maca_abacaxi,
      arroz_macarrao_polenta_cuscuz_milho_verde,
      feijao_ervilha_lentilha_grao_de_bico,
      batata_comum_mandioca_cara_inhame,
      ovo_frito_cozido_mexido,
      leite,
      amendoim_castanha_de_caju_ou_castanha_do_brasil_para,
      soft_drink,
      juice_can_or_box,
      juice_powder,
      chocolate_beverage,
      flavored_yogurt,
      salty_snacks,
      cookies,
      industrialized_dessert,
      sausages,
      hot_dog_or_burguer_bread,
      mayonnaise_ketchup_mustard,
      margarine,
      instant_noodles_or_soup_or_frozen_food,
      government_assistance_program_cadastro_unico,
      government_assistance_program_bolsa_familia,
      government_assistance_program_bpc,
      pension,
      prison_cash_assistance,
      government_assistance_program_pnae,
      food_basket_assistance,
      low_income_restaurants,
      covid_cash_assistance,
      covid_cash_assistance_number_of_times,
      charity,
      type_of_charity,
      embarassement,
      home_grown,
      food_for_market,
      market_profile,
      difficulty_selling_food,
      could_not_sell_food,
      income_unkown,
      family_income,
      worried_food_supply,
      lack_food_supply,
      afford_healthy_food,
      poor_food_choice,
      adult_meals,
      adult_food_privation,
      adult_hunger,
      adult_one_meal_or_none,
      how_food_is_obtained,
      food_price_change,
      food_profile_change,
      food_store_type,
      food_expenditure,
    });

    await this.householdsRepository.save(household);

    return household;
  }
}
