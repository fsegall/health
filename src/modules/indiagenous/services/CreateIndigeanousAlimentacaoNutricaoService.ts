import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigeanousAlimentacaoNutricaoDTO } from '../dtos/ICreateIndigeanousAlimentacaoNutricaoDTO';
import { IIndigeanousAlimentacaoNutricaoRepository } from '../repositories/IIndigeanousAlimentacaoNutricaoRepository';
import { IIndigeanousInterviewRepository } from '../repositories/IIndigeanousInterviewRepository';

@injectable()
export class CreateIndigeanousAlimentacaoNutricaoService {
  constructor(
    @inject('IndigeanousAlimentacaoNutricaoRepository')
    private indigeanousAlimentacaoNutricaoRepository: IIndigeanousAlimentacaoNutricaoRepository,

    @inject('IndigeanousInterviewRepository')
    private indigeanousInterviewRepository: IIndigeanousInterviewRepository,
  ) {}

  async execute({
    alimentacao_saudavel_diariamente_30d,
    alimentos_consumidos_dia_anterior,
    animais_de_criacao_alimentacao_ou_venda,
    comida_disponivel_todos_os_dias_30d,
    consumiram_sempre_alimentos_da_cultura,
    dia_sem_alimentos_30d,
    domicilio_possui_agua_para_producao_alimentos,
    entrevista_indigena_id,
    faz_remedios_com_plantas,
    lugar_precisou_comprar_alimentos_3m,
    luta_por_terra,
    material_utilizado_para_fazer_fogo,
    moradia_possui_fogao,
    morador_faz_horta,
    origem_comida,
    possui_moradores_menores_de_16,
    precisou_comprar_alimentos_3m,
    acao_quando_falta_comida,
    adiciona_veneno_na_plantacao,
    alimentacao_do_gosto_30d,
    alimentos_da_horta,
    comeu_menos_para_alimentar_os_jovens_30d,
    dificuldade_com_horta,
    domicilio_possui_agua_para_animais,
    finalidade_horta,
    frutiferas_nas_proximidades,
    jovens_comeram_menos_do_necessario_30d,
    jovens_passaram_algum_dia_sem_alimentos_30d,
    lista_animais_de_criacao_alimentacao_ou_venda,
    lista_dificuldades_com_horta,
    morar_retomada_mudou_alimentacao,
    motivo_morador_nao_faz_horta,
    motivo_sem_alimentacao_por_conflito_com_terras,
    origem_semente_plantio,
    possui_cultivo_plantas_medicinais,
    preocupacao_em_conseguir_comida_30d,
    primeiros_a_se_alimentar,
    producao_de_comida_ano_todo,
    sem_alimentacao_por_conflito_com_terras,
    ultimos_a_se_alimentar,
  }: ICreateIndigeanousAlimentacaoNutricaoDTO): Promise<void> {
    const indigeanousInterview = await this.indigeanousInterviewRepository.findById(
      entrevista_indigena_id,
    );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    await this.indigeanousAlimentacaoNutricaoRepository.create({
      alimentacao_saudavel_diariamente_30d,
      alimentos_consumidos_dia_anterior: alimentos_consumidos_dia_anterior.toString(),
      animais_de_criacao_alimentacao_ou_venda,
      comida_disponivel_todos_os_dias_30d,
      consumiram_sempre_alimentos_da_cultura,
      dia_sem_alimentos_30d,
      domicilio_possui_agua_para_producao_alimentos,
      entrevista_indigena_id,
      faz_remedios_com_plantas,
      lugar_precisou_comprar_alimentos_3m: lugar_precisou_comprar_alimentos_3m.toString(),
      luta_por_terra,
      material_utilizado_para_fazer_fogo,
      moradia_possui_fogao: moradia_possui_fogao.toString(),
      morador_faz_horta,
      origem_comida,
      possui_moradores_menores_de_16,
      precisou_comprar_alimentos_3m,
      acao_quando_falta_comida: acao_quando_falta_comida?.toString(),
      adiciona_veneno_na_plantacao,
      alimentacao_do_gosto_30d,
      alimentos_da_horta: alimentos_da_horta?.toString(),
      comeu_menos_para_alimentar_os_jovens_30d,
      dificuldade_com_horta,
      domicilio_possui_agua_para_animais,
      finalidade_horta,
      frutiferas_nas_proximidades: frutiferas_nas_proximidades?.toString(),
      jovens_comeram_menos_do_necessario_30d,
      jovens_passaram_algum_dia_sem_alimentos_30d,
      lista_animais_de_criacao_alimentacao_ou_venda: lista_animais_de_criacao_alimentacao_ou_venda?.toString(),
      lista_dificuldades_com_horta: lista_dificuldades_com_horta?.toString(),
      morar_retomada_mudou_alimentacao,
      motivo_morador_nao_faz_horta: motivo_morador_nao_faz_horta?.toString(),
      motivo_sem_alimentacao_por_conflito_com_terras,
      origem_semente_plantio: origem_semente_plantio?.toString(),
      possui_cultivo_plantas_medicinais,
      preocupacao_em_conseguir_comida_30d,
      primeiros_a_se_alimentar,
      producao_de_comida_ano_todo,
      sem_alimentacao_por_conflito_com_terras,
      ultimos_a_se_alimentar,
    });
  }
}
