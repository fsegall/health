import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListIndigenousInterviewService } from '@modules/indigenous/services/ListIndigenousInterviewService';

export class ListIndigenousInterviewController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listIndigenousInterviewService = container.resolve(
      ListIndigenousInterviewService,
    );

    const { params } = request;

    const page = Number(params?.page);
    const limit = Number(params?.limit);

    const indigenousInterviews = await listIndigenousInterviewService.execute({
      page,
      limit,
    });

    return response.json(indigenousInterviews);
  }
}
