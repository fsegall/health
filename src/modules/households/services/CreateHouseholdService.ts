import { injectable, inject } from 'tsyringe';

import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import AppError from '@shared/errors/AppError';

import Household from '../infra/typeorm/entities/Household';

interface IRequest {
  person_id: string;
  local_do_domicilio: string;
  morador_de_rua: string;
  povos_tradicionais: string;
  qual_povo_tradicional?: string;
  pessoa_de_referencia: string;
  idade_pessoa_de_referencia?: number;
  sexo_pessoa_de_referencia?: string;
  raca_cor?: string;
  ler_escrever?: string;
  escolaridade?: string;
  situacao_de_trabalho?: string;
  ocupacao_profissional?: string;
  local_de_trabalho?: string;
  covid_2020: string;
  covid_2021: string;
  covid_2022: string;
  covid_perda: string;
  tipo_de_residencia: string;
  numero_de_comodos: number;
  material_de_construcao: string;
  agua_potavel: string;
  agua_animais?: string;
  agua_producao_alimentos?: string;
  esgoto: string;
  numero_de_pessoas: number;
  uma_pessoa_domicilio: boolean;
  cinco_anos_ou_mais?: number;
  entre_6_e_18?: number;
  entre_19_e_59?: number;
  sessenta_anos_ou_mais?: number;
  pessoas_convidadas?: string;
  nao_sabe_renda: boolean;
  renda_familiar?: number;
  faixa_de_renda: string;

  perda_de_emprego?: boolean;
  reducao_de_salario?: boolean;
  ajuda_financeira?: boolean;
  divida?: boolean;
  corte_de_gastos?: boolean;
  corte_de_gastos_nao_essenciais?: boolean;
  ns_nr_trabalho?: boolean;

  educacao_basica_publica: string;
  pnae?: string;
  cadastro_unico: string;
  bolsa_familia: string;
  bpc: string;
  pensao: string;
  auxilio_reclusao: string;
  cesta_de_alimentos: string;
  restaurantes_populares: string;
  auxilio_emergencial: string;
  auxilio_vezes?: string;
  ajuda_instituicao_caridade: string;
  tipo_de_ajuda?: string;
  vergonha: string;
  produz_alimento: string;
  alimento_para_venda?: string;
  divisao_alimento?: string;
  dificuldade_venda?: string;
  nao_vendeu?: string;
  preocupacao_alimentos: string;
  alimentos_acabaram: string;
  alimentos_saudaveis: string;
  alimentos_poucos_tipos?: string;
  refeicoes_adulto?: string;
  adulto_comeu_menos?: string;
  adulto_fome?: string;
  adulto_uma_refeicao?: string;
  como_adquiriu_comida: string;
  alteracao_preco_comida: string;
  perfil_de_compra?: string;
  mercado: string;
  gastos_alimentacao: string;
  // D68 - multipla escolha
  feijao?: boolean;
  arroz?: boolean;
  carnes?: boolean;
  verduras_legumes?: boolean;
  frutas_frescas?: boolean;
  leite?: boolean;
  hamburguer_embutidos?: boolean;
  bebidas_adocadas?: boolean;
  macarrao_instantaneo_salgadinhos_de_pacote_biscoitos_salgados?: boolean;
  biscoito_recheado_doces_guloseimas?: boolean;
}

@injectable()
export default class CreateHouseholdService {
  constructor(
    @inject('HouseholdsRepository')
    private householdsRepository: IHouseholdsRepository,
  ) {}
  public async execute({
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
    covid_2021,
    covid_2022,
    covid_perda,
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
      covid_2021,
      covid_2022,
      covid_perda,
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

    await this.householdsRepository.save(household);

    return household;
  }
}