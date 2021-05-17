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
      local_do_domicilio,
      morador_de_rua,
      povos_tradicionais,
      qual_povo_tradicional,
      pessoa_de_referencia,
      idade_pessoa_de_referencia,
      sexo_pessoa_de_referencia,
      raca_cor,
      ler_escrever,
      escolaridade,
      situacao_de_trabalho,
      ocupacao_profissional,
      local_de_trabalho,
      covid_2020,
      covid_perda_2020,
      covid_2021,
      covid_perda_2021,
      tipo_de_residencia,
      numero_de_comodos,
      material_de_construcao,
      agua_potavel,
      agua_animais,
      agua_producao_alimentos,
      esgoto,
      numero_de_pessoas,
      uma_pessoa_domicilio,
      cinco_anos_ou_mais,
      entre_6_e_18,
      entre_19_e_59,
      sessenta_anos_ou_mais,
      pessoas_convidadas,
      nao_sabe_renda,
      renda_familiar,
      faixa_de_renda,
      // D35 - multipla escolha
      perda_de_emprego,
      reducao_de_salario,
      ajuda_financeira,
      divida,
      corte_de_gastos,
      corte_de_gastos_nao_essenciais,
      ns_nr_trabalho,
      //
      educacao_basica_publica,
      pnae,
      cadastro_unico,
      bolsa_familia,
      bpc,
      pensao,
      auxilio_reclusao,
      cesta_de_alimentos,
      restaurantes_populares,
      auxilio_emergencial,
      auxilio_vezes,
      ajuda_instituicao_caridade,
      tipo_de_ajuda,
      vergonha,
      produz_alimento,
      alimento_para_venda,
      divisao_alimento,
      dificuldade_venda,
      nao_vendeu,
      preocupacao_alimentos,
      alimentos_acabaram,
      alimentos_saudaveis,
      alimentos_poucos_tipos,
      refeicoes_adulto,
      adulto_comeu_menos,
      adulto_fome,
      adulto_uma_refeicao,
      como_adquiriu_comida,
      alteracao_preco_comida,
      perfil_de_compra,
      mercado,
      gastos_alimentacao,
      // D68 - multipla escolha
      feijao,
      arroz,
      carnes,
      verduras_legumes,
      frutas_frescas,
      leite,
      hamburguer_embutidos,
      bebidas_adocadas,
      macarrao_instantaneo_salgadinhos_de_pacote_biscoitos_salgados,
      biscoito_recheado_doces_guloseimas,
    } = request.body;

    const createHousehold = container.resolve(CreateHouseholdService);

    const household = await createHousehold.execute({
      person_id,
      local_do_domicilio,
      morador_de_rua,
      povos_tradicionais,
      qual_povo_tradicional,
      pessoa_de_referencia,
      idade_pessoa_de_referencia,
      sexo_pessoa_de_referencia,
      raca_cor,
      ler_escrever,
      escolaridade,
      situacao_de_trabalho,
      ocupacao_profissional,
      local_de_trabalho,
      covid_2020,
      covid_perda_2020,
      covid_2021,
      covid_perda_2021,
      tipo_de_residencia,
      numero_de_comodos,
      material_de_construcao,
      agua_potavel,
      agua_animais,
      agua_producao_alimentos,
      esgoto,
      numero_de_pessoas,
      uma_pessoa_domicilio,
      cinco_anos_ou_mais,
      entre_6_e_18,
      entre_19_e_59,
      sessenta_anos_ou_mais,
      pessoas_convidadas,
      nao_sabe_renda,
      renda_familiar,
      faixa_de_renda,
      // D35 - multipla escolha
      perda_de_emprego,
      reducao_de_salario,
      ajuda_financeira,
      divida,
      corte_de_gastos,
      corte_de_gastos_nao_essenciais,
      ns_nr_trabalho,
      //
      educacao_basica_publica,
      pnae,
      cadastro_unico,
      bolsa_familia,
      bpc,
      pensao,
      auxilio_reclusao,
      cesta_de_alimentos,
      restaurantes_populares,
      auxilio_emergencial,
      auxilio_vezes,
      ajuda_instituicao_caridade,
      tipo_de_ajuda,
      vergonha,
      produz_alimento,
      alimento_para_venda,
      divisao_alimento,
      dificuldade_venda,
      nao_vendeu,
      preocupacao_alimentos,
      alimentos_acabaram,
      alimentos_saudaveis,
      alimentos_poucos_tipos,
      refeicoes_adulto,
      adulto_comeu_menos,
      adulto_fome,
      adulto_uma_refeicao,
      como_adquiriu_comida,
      alteracao_preco_comida,
      perfil_de_compra,
      mercado,
      gastos_alimentacao,
      // D68 - multipla escolha
      feijao,
      arroz,
      carnes,
      verduras_legumes,
      frutas_frescas,
      leite,
      hamburguer_embutidos,
      bebidas_adocadas,
      macarrao_instantaneo_salgadinhos_de_pacote_biscoitos_salgados,
      biscoito_recheado_doces_guloseimas,

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
