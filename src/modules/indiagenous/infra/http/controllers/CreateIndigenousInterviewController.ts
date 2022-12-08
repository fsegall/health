import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigenousInterviewDTO } from '@modules/indiagenous/dtos/ICreateIndigenousInterviewDTO';
import { CreateIndigenousInterviewService } from '@modules/indiagenous/services/CreateIndigenousInterviewService';

export class CreateIndigeanousInterviewController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigenousInterviewDTO = request.body;

    const createIndigeanousInterviewService = container.resolve(
      CreateIndigenousInterviewService,
    );

    const indigenousInterview = await createIndigeanousInterviewService.execute(
      data,
    );

    return response.status(201).json(indigenousInterview);
  }
}
