import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICreateIndigeanousInterviewResidenceDTO } from '../dtos/ICreateIndigeanousInterviewResidenceDTO';
import { IndigeanousResidence } from '../infra/typeorm/entities/IndigeanousResidence';
import { IIndigeanousInterviewRepository } from '../repositories/IIndigeanousInterviewRepository';
import { IIndigeanousInterviewResidenceRepository } from '../repositories/IIndigeanousInterviewResidenceRepository';

@injectable()
export class CreateIndigeanousInterviewResidenceService {
  constructor(
    @inject('IndigeanousInterviewResidenceRepository')
    private indigeanousInterviewResidenceRepository: IIndigeanousInterviewResidenceRepository,

    @inject('IndigeanousInterviewRepository')
    private indigeanousInterviewRepository: IIndigeanousInterviewRepository,
  ) {}

  async execute({
    acesso_agua,
    destino_lixo_da_residencia,
    entrevista_indigena_id,
    forma_acesso_agua,
    forma_coleta_esgoto,
    material_paredes,
    material_telhado,
    origem_agua,
    piso,
    possui_banheiro,
    qualidade_agua_para_beber_e_cozinhar,
    quantidade_comodos,
    renda_total_30_dias,
    ultima_moradia,
    utensilios_casa,
    veiculos,
  }: ICreateIndigeanousInterviewResidenceDTO): Promise<IndigeanousResidence> {
    const indigeanousInterview =
      await this.indigeanousInterviewRepository.findById(
        entrevista_indigena_id,
      );

    if (!indigeanousInterview) {
      throw new AppError('Indigeanous interview not found', 404);
    }

    const indigenousResidence =
      await this.indigeanousInterviewResidenceRepository.create({
        acesso_agua,
        destino_lixo_da_residencia: destino_lixo_da_residencia.toString(),
        entrevista_indigena_id,
        forma_acesso_agua,
        forma_coleta_esgoto,
        material_paredes,
        material_telhado,
        origem_agua,
        piso,
        possui_banheiro,
        qualidade_agua_para_beber_e_cozinhar,
        quantidade_comodos,
        renda_total_30_dias,
        ultima_moradia,
        utensilios_casa: utensilios_casa.toString(),
        veiculos: veiculos.toString(),
      });

    return indigenousResidence;
  }
}
