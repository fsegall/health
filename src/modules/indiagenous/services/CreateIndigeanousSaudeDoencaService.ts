import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigeanousSaudeDoencaDTO } from '../dtos/ICreateIndigeanousSaudeDoencaDTO';
import { IIndigeanousInterviewRepository } from '../repositories/IIndigeanousInterviewRepository';
import { IIndigeanousSaudeDoencaRepository } from '../repositories/IIndigeanousSaudeDoencaRepository';

@injectable()
export class CreateIndigeanousSaudeDoencaService {
  constructor(
    @inject('IndigeanousSaudeDoencaRepository')
    private indigeanousSaudeDoencaRepository: IIndigeanousSaudeDoencaRepository,

    @inject('IndigeanousInterviewRepository')
    private indigeanousInterviewRepository: IIndigeanousInterviewRepository,
  ) {}

  async execute({
    acidentes,
    entrevista_indigena_id,
    medicacao_uso_continuo,
    morador_exposto_veneno_lavoura,
    morador_internado,
    morador_problemas_bebidas_alcoolicas,
    morador_problemas_uso_drogas,
    ocorrencia_de_ameacas,
    ocorrencia_violencia_fisica,
    primeiro_recurso_ao_notar_doenca,
    tomou_vacina_covid,
    tratamento_com_paje_ou_similar,
    tratamento_igreja,
    acidentes_ocorridos,
    condicao_de_saude,
    doenca_medicacao_uso_continuo,
    doencas_contato_veneno_lavoura,
    familiar_morte_covid,
    familiar_morte_covid_contribuia_renda_familiar,
    familiares_morte_outras_causas,
    familiares_morte_outras_causas_contribuia_renda_familiar,
    lista_tratamentos,
    local_ocorrencia_violencia_fisica,
    motivo_doencas_contato_veneno_lavoura,
    motivo_familiares_morte_outras_causas,
    motivo_nao_tomar_vacina_covid,
    tekoha_mudou_condicao_de_saude,
  }: ICreateIndigeanousSaudeDoencaDTO): Promise<void> {
    const indigeanousInterview = await this.indigeanousInterviewRepository.findById(
      entrevista_indigena_id,
    );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    await this.indigeanousSaudeDoencaRepository.create({
      acidentes,
      entrevista_indigena_id,
      medicacao_uso_continuo,
      morador_exposto_veneno_lavoura,
      morador_internado,
      morador_problemas_bebidas_alcoolicas,
      morador_problemas_uso_drogas,
      ocorrencia_de_ameacas,
      ocorrencia_violencia_fisica,
      primeiro_recurso_ao_notar_doenca,
      tomou_vacina_covid,
      tratamento_com_paje_ou_similar,
      tratamento_igreja,
      acidentes_ocorridos,
      condicao_de_saude,
      doenca_medicacao_uso_continuo,
      doencas_contato_veneno_lavoura,
      familiar_morte_covid,
      familiar_morte_covid_contribuia_renda_familiar,
      familiares_morte_outras_causas,
      familiares_morte_outras_causas_contribuia_renda_familiar,
      lista_tratamentos: lista_tratamentos?.toString(),
      local_ocorrencia_violencia_fisica: local_ocorrencia_violencia_fisica?.toString(),
      motivo_doencas_contato_veneno_lavoura,
      motivo_familiares_morte_outras_causas,
      motivo_nao_tomar_vacina_covid,
      tekoha_mudou_condicao_de_saude,
    });
  }
}
