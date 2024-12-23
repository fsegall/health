import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigenousInterviewDemographyDTO } from '@modules/indigenous/v2/dtos/ICreateIndigenousInterviewDemographyDTO';
import { CreateIndigenousInterviewDemographyService } from '@modules/indigenous/v2/services/CreateIndigenousInterviewDemographyService';

export class CreateIndigeanousInterviewDemographyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigenousInterviewDemographyDTO = request.body;

    const createIndigeanousInterviewDemographyService = container.resolve(
      CreateIndigenousInterviewDemographyService,
    );

    const indigenousDemography =
      await createIndigeanousInterviewDemographyService.execute(data);

    return response.status(201).json(indigenousDemography);
  }
}
