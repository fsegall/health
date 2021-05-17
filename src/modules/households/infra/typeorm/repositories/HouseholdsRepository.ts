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
  }: ICreateHouseholdDTO): Promise<Household> {
    const household = this.ormRepository.create({
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
    await this.ormRepository.save(household);
    return household;
  }

  public async findById(household_id: string): Promise<Household | undefined> {
    const household = await this.ormRepository.findOne(household_id);
    return household;
  }

  public async list(): Promise<Household[]> {

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
    const household = await this.ormRepository.findOne({
      where: {
        person_id
      }
    });
    console.log('findByPerson', household)
    return household;
  }
}

export default HouseholdsRepository;
