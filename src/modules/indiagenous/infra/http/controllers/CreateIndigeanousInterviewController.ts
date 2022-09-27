import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateIndigeanousInterviewService } from '@modules/indiagenous/services/CreateIndigeanousInterviewService';

export class CreateIndigeanousInterviewController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      city,
      comunity,
      land,
      area,
      campName,
      interviewerId,
      projectId,
      date,
    } = request.body;

    const createIndigeanousInterviewService = container.resolve(
      CreateIndigeanousInterviewService,
    );

    const indigeanousInterview = await createIndigeanousInterviewService.execute(
      { city, comunity, land, area, campName, interviewerId, projectId, date },
    );

    return response.status(201).json(indigeanousInterview);
  }
}
