import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigenousInterviewResidenceDTO } from '@modules/indigenous/v2/dtos/ICreateIndigenousInterviewResidenceDTO';
import { CreateIndigenousInterviewResidenceService } from '@modules/indigenous/v2/services/CreateIndigenousInterviewResidenceService';

export class CreateIndigeanousInterviewResidenceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigenousInterviewResidenceDTO = request.body;

    const createIndigeanousInterviewResidenceService = container.resolve(
      CreateIndigenousInterviewResidenceService,
    );

    const indigenousResidence =
      await createIndigeanousInterviewResidenceService.execute(data);

    return response.status(201).json(indigenousResidence);
  }
}
