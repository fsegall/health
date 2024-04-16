import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IHandleOfflineInterviewsDTO } from '@modules/indigenous/v2/dtos/IHandleOfflineInterviewsDTO';
import { HandleOfflineInterviewsService } from '@modules/indigenous/v2/services/HandleOfflineInterviewsService';

export class HandleOfflinetInterviewsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IHandleOfflineInterviewsDTO[] = request.body;

    const handleOfflineInterviewsService = container.resolve(
      HandleOfflineInterviewsService,
    );

    const notSavedInterviews = await handleOfflineInterviewsService.execute(
      data,
    );

    return response.status(201).json(notSavedInterviews);
  }
}
