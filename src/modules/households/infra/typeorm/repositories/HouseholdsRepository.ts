import { getRepository, Repository } from 'typeorm';
import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import ICreateHouseholdDTO from '@modules/households/dtos/ICreateHouseholdDTO';
import Household from '@modules/households/infra/typeorm/entities/Household';
import AppError from '@shared/errors/AppError';

class HouseholdsRepository implements IHouseholdsRepository {
  private ormRepository: Repository<Household>;

  constructor() {
    this.ormRepository = getRepository(Household);
  }

  public async create({
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
    income_unknown,
    family_income,
    job_loss,
    salary_reduction,
    financial_support,
    debt,
    cut_costs,
    cut_non_essential_costs,
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
  }: ICreateHouseholdDTO): Promise<Household> {
    const household = this.ormRepository.create({
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
      income_unknown,
      family_income,
      job_loss,
      salary_reduction,
      financial_support,
      debt,
      cut_costs,
      cut_non_essential_costs,
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
    await this.ormRepository.save(household);
    return household;
  }

  public async findById(household_id: string): Promise<Household | undefined> {
    const household = await this.ormRepository.findOne(household_id);
    return household;
  }

  public async list(): Promise<Household[]> {
    console.log('houses');
    const households = this.ormRepository.find();
    return households;
  }

  public async save(household: Household): Promise<Household> {
    return this.ormRepository.save(household);
  }

  public async delete(household_id: string): Promise<void> {
    const household = await this.ormRepository.findOne(household_id);

    if (!household) {
      throw new AppError('There is no Household with this id.');
    }
    await this.ormRepository.remove(household);
  }

  public async findByPerson(person_id: string): Promise<Household | undefined> {
    const household = await this.ormRepository.findOne({ person_id });

    return household;
  }
}

export default HouseholdsRepository;
