// index, show, create, update, delete

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateHouseholdService from '@modules/households/services/CreateHouseholdService';
import ListHouseholdsService from '@modules/households/services/ListHouseholdsService';
import PersonsHouseholdService from '@modules/households/services/PersonsHouseholdService';
// import UpdateHouseholdService from '@modules/households/services/UpdateHouseholdService';
// import ShowHouseholdService from '@modules/households/services/ShowHouseholdService';
// import DeleteHouseholdService from '@modules/households/services/DeleteHouseholdService';

export default class HouseholdsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;

    const createHousehold = container.resolve(CreateHouseholdService);

    const household = await createHousehold.execute({
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

    return response.status(201).json(household);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listHouseholds = container.resolve(ListHouseholdsService);
    const households = await listHouseholds.execute();
    return response.json(households);
  }

  // public async update(request: Request, response: Response): Promise<Response> {
  //   const {
  //     interviewer_id,
  //     person_id,
  //     name,
  //     date_of_birth,
  //     gender,
  //     race_color,
  //     religion,
  //     marital_status,
  //     literacy,
  //     education,
  //     work_status,
  //     health_conditions,
  //   } = request.body;
  //   const updatePerson = container.resolve(UpdatePersonService);
  //   const person = await updatePerson.execute({
  //     interviewer_id,
  //     person_id,
  //     logged_id: request.user.id,
  //     name,
  //     date_of_birth,
  //     gender,
  //     race_color,
  //     religion,
  //     marital_status,
  //     literacy,
  //     education,
  //     work_status,
  //     health_conditions,
  //   });

  //   return response.json(person);
  // }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showHousehold = container.resolve(PersonsHouseholdService);

    const household = await showHousehold.execute({ person_id: id });

    return response.json(household);
  }

  // public async delete(request: Request, response: Response): Promise<Response> {
  //   const { id } = request.params;

  //   const deletePerson = container.resolve(DeletePersonService);

  //   const person = await deletePerson.execute({ person_id: id });

  //   return response.json(person);
  // }
}
