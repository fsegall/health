import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListIndigenousInterviewService } from '@modules/indigenous/services/ListIndigenousInterviewService';

export class ListIndigenousInterviewController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listIndigenousInterviewService = container.resolve(
      ListIndigenousInterviewService,
    );

    const { params, body } = request;

    const page = Number(params?.page);
    const limit = Number(params?.limit);
    const loggedUserId = request?.user?.id;

    const { projeto_id, entrevistador_id } = body;

    const indigenousInterviews = await listIndigenousInterviewService.execute({
      page,
      limit,
      loggedUserId,
      projeto_id,
      entrevistador_id,
    });

    return response.json(indigenousInterviews);
  }
}
