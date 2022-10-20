import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigeanousInterviewDemographyDTO } from '@modules/indiagenous/dtos/ICreateIndigeanousInterviewDemographyDTO';
import { CreateIndigeanousInterviewDemographyService } from '@modules/indiagenous/services/CreateIndigeanousInterviewDemographyService';

export class CreateIndigeanousInterviewDemographyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      entrevista_indigena_id,
      moradores,
      total_moradores,
      trabalho_colheita_maca,
    }: ICreateIndigeanousInterviewDemographyDTO = request.body;

    const createIndigeanousInterviewDemographyService = container.resolve(
      CreateIndigeanousInterviewDemographyService,
    );

    const indigenousDemography =
      await createIndigeanousInterviewDemographyService.execute({
        entrevista_indigena_id,
        moradores,
        total_moradores,
        trabalho_colheita_maca,
      });

    return response.status(201).json(indigenousDemography);
  }
}
