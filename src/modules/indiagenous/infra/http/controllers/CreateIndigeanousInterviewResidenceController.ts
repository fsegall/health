import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigeanousInterviewResidenceDTO } from '@modules/indiagenous/dtos/ICreateIndigeanousInterviewResidenceDTO';
import { CreateIndigeanousInterviewResidenceService } from '@modules/indiagenous/services/CreateIndigeanousInterviewResidenceService';

export class CreateIndigeanousInterviewResidenceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigeanousInterviewResidenceDTO = request.body;

    const createIndigeanousInterviewResidenceService = container.resolve(
      CreateIndigeanousInterviewResidenceService,
    );

    await createIndigeanousInterviewResidenceService.execute(data);

    return response.status(201).send();
  }
}
