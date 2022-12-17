import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListIndigenousInterviewService } from '@modules/indigenous/services/ListIndigenousInterviewService';

export class ListIndigenousInterviewController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listIndigenousInterviewService = container.resolve(
      ListIndigenousInterviewService,
    );

    const indigenousInterviews = await listIndigenousInterviewService.execute();

    return response.json(indigenousInterviews);
  }
}
