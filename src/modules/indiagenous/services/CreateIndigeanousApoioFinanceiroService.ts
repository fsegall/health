import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigeanousApoioFinanceiroDTO } from '../dtos/ICreateIndigeanousApoioFinanceiroDTO';
import { IIndigeanousApoioFinanceiroRepository } from '../repositories/IIndigeanousApoioFinanceiroRepository';
import { IIndigeanousInterviewRepository } from '../repositories/IIndigeanousInterviewRepository';

@injectable()
export class CreateIndigeanousApoioFinanceiroService {
  constructor(
    @inject('IndigeanousApoioFinanceiroRepository')
    private indigeanousApoioFinanceiroRepository: IIndigeanousApoioFinanceiroRepository,

    @inject('IndigeanousInterviewRepository')
    private indigeanousInterviewRepository: IIndigeanousInterviewRepository,
  ) {}

  async execute({
    morador_matriculado_na_educacao_basica_publica,
    quantidade_morador_matriculado_na_educacao_basica_publica,
    criancas_comem_na_escola,
    escola_inclui_alimentos_da_cultura,
    morador_recebe_ajuda_financeira,
    bolsa_familia_auxilio_brasil,
    bpc,
    beneficio_deficientes_ou_idosos,
    auxilio_maternidade,
    auxilio_doenca,
    auxilio_reclusao,
    aposentadoria,
    pensao_morte_conjuge,
    pronaf,
    auxilio_estadual_ou_municipal,
    cesta_de_alimentos,
    quantidade_cesta_de_alimentos_3m,
    origem_cesta_de_alimentos_3m,
    alimentos_deveriam_estar_na_cesta_e_nao_estao,
    alimentos_que_nao_deveriam_estar_na_cesta,
    descricao_adicionar_outro,
    descricao_remover_outro,
    motivo_nao_recebe_cesta_de_alimentos,
    quem_pega_dinheiro_bolsa_familia,
    auxilio_emergencial_na_pandemia,
    quantidade_vezes_auxilio_emergencial_na_pandemia,
    ajuda_estado_prefeitura_outros_3m,
    itens_recebidos_ajuda_estado_prefeitura_outros_3m,
    vergonha_constrangimento_para_conseguir_alimentos_3m,
    entrevista_indigena_id,
  }: ICreateIndigeanousApoioFinanceiroDTO): Promise<void> {
    const indigeanousInterview = await this.indigeanousInterviewRepository.findById(
      entrevista_indigena_id,
    );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    await this.indigeanousApoioFinanceiroRepository.create({
      morador_matriculado_na_educacao_basica_publica,
      quantidade_morador_matriculado_na_educacao_basica_publica,
      criancas_comem_na_escola,
      escola_inclui_alimentos_da_cultura,
      morador_recebe_ajuda_financeira,
      bolsa_familia_auxilio_brasil,
      bpc,
      beneficio_deficientes_ou_idosos,
      auxilio_maternidade,
      auxilio_doenca,
      auxilio_reclusao,
      aposentadoria,
      pensao_morte_conjuge,
      pronaf,
      auxilio_estadual_ou_municipal,
      cesta_de_alimentos,
      quantidade_cesta_de_alimentos_3m,
      origem_cesta_de_alimentos_3m: origem_cesta_de_alimentos_3m?.toString(),
      alimentos_deveriam_estar_na_cesta_e_nao_estao: alimentos_deveriam_estar_na_cesta_e_nao_estao?.toString(),
      alimentos_que_nao_deveriam_estar_na_cesta: alimentos_que_nao_deveriam_estar_na_cesta?.toString(),
      descricao_adicionar_outro,
      descricao_remover_outro,
      motivo_nao_recebe_cesta_de_alimentos,
      quem_pega_dinheiro_bolsa_familia,
      auxilio_emergencial_na_pandemia,
      quantidade_vezes_auxilio_emergencial_na_pandemia,
      ajuda_estado_prefeitura_outros_3m,
      itens_recebidos_ajuda_estado_prefeitura_outros_3m,
      vergonha_constrangimento_para_conseguir_alimentos_3m,
      entrevista_indigena_id,
    });
  }
}
