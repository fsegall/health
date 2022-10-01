import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigeanousInterviewDemographyDTO } from '@modules/indiagenous/dtos/ICreateIndigeanousInterviewDemographyDTO';
import { CreateIndigeanousInterviewDemographyService } from '@modules/indiagenous/services/CreateIndigeanousInterviewDemographyService';

export class CreateIndigeanousInterviewDemographyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      indigeanousInterviewId,
      residents,
      totalResidents,
      workedHarvest,
    }: ICreateIndigeanousInterviewDemographyDTO = request.body;

    const createIndigeanousInterviewDemographyService = container.resolve(
      CreateIndigeanousInterviewDemographyService,
    );

    const indigeanousInterviewDemography = await createIndigeanousInterviewDemographyService.execute(
      { indigeanousInterviewId, residents, totalResidents, workedHarvest },
    );

    return response.status(201).json(indigeanousInterviewDemography);
  }
}
