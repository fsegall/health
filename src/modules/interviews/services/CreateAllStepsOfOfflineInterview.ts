import { injectable, inject } from 'tsyringe';

import CreateAddressService from '@modules/households/services/CreateAddressService';
import CreateHouseholdService from '@modules/households/services/CreateHouseholdService';
import CreatePersonService from '@modules/persons/services/CreatePersonService';
import { Roles } from '@modules/users/authorization/constants';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

import Interview from '../infra/typeorm/entities/Interview';
import CreateInterviewService from './CreateInterviewService';
/* import AppError from '@shared/errors/AppError'; */

interface IRequest {
  interviewer_id: string;
  project_name: string;
  project_number: number;
  person_id: string;
  household_id: string;
  address_id: string;
  is_complete: boolean;
  is_complete_with_errors: boolean;
  interview_type: string;
  comments: string;
}

@injectable()
export default class CreateAllStepsOfOfflineInterview {
  constructor(
    private createInterviewService: CreateInterviewService,
    private createPersonService: CreatePersonService,
    private createHouseHold: CreateHouseholdService,
    private createAddress: CreateAddressService,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async createAll({
    person,
    household,
    address,
    interviewData,
  }: any): Promise<Interview> {
    const {
      interviewer_id,
      nome,
      idade,
      sexo,
      raca_cor,
      ler_escrever,
      escolaridade,
      situacao_de_trabalho,
      ocupacao,
      local_de_trabalho,
      diagnostico_covid,
      vacina,
      nao_tomou_vacina,
    } = person;

    const {
      local_do_domicilio,
      morador_de_rua,
      povos_tradicionais,
      qual_povo_tradicional,
      pessoa_de_referencia,
      idade_pessoa_de_referencia,
      sexo_pessoa_de_referencia,
      raca_cor: referencia_raca_cor,
      ler_escrever: referencia_ler_escrever,
      escolaridade: referencia_escolaridade,
      situacao_de_trabalho: referencia_situacao_de_trabalho,
      ocupacao_profissional: referencia_ocupacao_profissional,
      local_de_trabalho: referencia_local_de_trabalho,
      diagnostico_covid_positivo,
      sequelas_covid,
      morte_ultimos_12_meses,
      causa_morte_ultimos_12_meses,
      contribuicao_morte_ultimos_12m,
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
      menores_6_anos,
      frequentam_creche,
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
    } = household;

    const {
      state,
      city,
      post_code,
      neighborhood,
      street_or_location,
      house_number,
      telephone_number,
    } = address;

    const {
      comments,
      interview_type,
      is_complete,
      project_number,
      project_name,
      is_complete_with_errors,
    } = interviewData;

    const checkIsVisitor = await this.usersRepository.findById(interviewer_id);

    if (checkIsVisitor?.role === Roles.VISITOR) {
      throw new AppError('O usuário não tem permissão para criar entrevistas.');
    }

    const createPerson = await this.createPersonService.execute({
      interviewer_id,
      nome,
      idade,
      sexo,
      raca_cor,
      ler_escrever,
      escolaridade,
      situacao_de_trabalho,
      ocupacao,
      local_de_trabalho,
      diagnostico_covid,
      vacina,
      nao_tomou_vacina,
    });

    const createHouseHold = await this.createHouseHold.execute({
      person_id: createPerson?.id,
      local_do_domicilio,
      morador_de_rua,
      povos_tradicionais,
      qual_povo_tradicional,
      pessoa_de_referencia,
      idade_pessoa_de_referencia,
      sexo_pessoa_de_referencia,
      raca_cor: referencia_raca_cor,
      ler_escrever: referencia_ler_escrever,
      escolaridade: referencia_escolaridade,
      situacao_de_trabalho: referencia_situacao_de_trabalho,
      ocupacao_profissional: referencia_ocupacao_profissional,
      local_de_trabalho: referencia_local_de_trabalho,
      causa_morte_ultimos_12_meses,
      contribuicao_morte_ultimos_12m,
      diagnostico_covid_positivo,
      frequentam_creche,
      morte_ultimos_12_meses,
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
      menores_6_anos,
      sequelas_covid,
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

    const createAddress = await this.createAddress.execute({
      household_id: createHouseHold.id,
      state,
      city,
      post_code,
      neighborhood,
      street_or_location,
      house_number,
      telephone_number,
    });

    const interview: Interview = await this.createInterviewService.execute({
      interviewer_id,
      project_name: project_name.toUpperCase(),
      project_number,
      person_id: createPerson?.id,
      household_id: createHouseHold?.id,
      address_id: createAddress?.id,
      is_complete,
      is_complete_with_errors,
      interview_type,
      comments,
    });

    return interview;
  }
}
