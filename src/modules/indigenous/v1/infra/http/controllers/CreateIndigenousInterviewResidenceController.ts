import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigenousInterviewResidenceDTO } from '@modules/indigenous/dtos/ICreateIndigenousInterviewResidenceDTO';
import { CreateIndigenousInterviewResidenceService } from '@modules/indigenous/services/CreateIndigenousInterviewResidenceService';

export class CreateIndigeanousInterviewResidenceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigenousInterviewResidenceDTO = request.body;

    const createIndigeanousInterviewResidenceService = container.resolve(
      CreateIndigenousInterviewResidenceService,
    );

    const indigenousResidence = await createIndigeanousInterviewResidenceService.execute(
      data,
    );

    return response.status(201).json(indigenousResidence);
  }
}
