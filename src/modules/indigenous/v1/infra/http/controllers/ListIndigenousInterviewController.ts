import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListIndigenousInterviewService } from '@modules/indigenous/v1/services/ListIndigenousInterviewService';

export class ListIndigenousInterviewController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listIndigenousInterviewService = container.resolve(
      ListIndigenousInterviewService,
    );

    const { params, query } = request;

    const page = Number(params?.page);
    const limit = Number(params?.limit);
    const loggedUserId = request?.user?.id;

    const { entrevistador_id, projeto_id } = query;

    const indigenousInterviews = await listIndigenousInterviewService.execute({
      page,
      limit,
      loggedUserId,
      projeto_id: projeto_id && String(projeto_id),
      entrevistador_id: entrevistador_id && String(entrevistador_id),
    });

    return response.json(indigenousInterviews);
  }
}
