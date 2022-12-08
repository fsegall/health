import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigeanousApoioFinanceiroDTO } from '../dtos/ICreateIndigeanousApoioFinanceiroDTO';
import { IndigeanousApoio } from '../infra/typeorm/entities/IndigeanousApoio';
import { IIndigeanousApoioRepository } from '../repositories/IIndigeanousApoioRepository';
import { IIndigenousInterviewRepository } from '../repositories/IIndigenousInterviewRepository';

@injectable()
export class CreateIndigeanousApoioService {
  constructor(
    @inject('IndigeanousApoioFinanceiroRepository')
    private indigeanousApoioFinanceiroRepository: IIndigeanousApoioRepository,

    @inject('IndigeanousInterviewRepository')
    private indigeanousInterviewRepository: IIndigenousInterviewRepository,
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
  }: ICreateIndigeanousApoioFinanceiroDTO): Promise<IndigeanousApoio> {
    const indigeanousInterview =
      await this.indigeanousInterviewRepository.findById(
        entrevista_indigena_id,
      );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    const indigenousSupport =
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
        alimentos_deveriam_estar_na_cesta_e_nao_estao:
          alimentos_deveriam_estar_na_cesta_e_nao_estao?.toString(),
        alimentos_que_nao_deveriam_estar_na_cesta:
          alimentos_que_nao_deveriam_estar_na_cesta?.toString(),
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

    return indigenousSupport;
  }
}
