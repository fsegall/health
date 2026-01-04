import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import { GetIndigenousInterviewByIdService } from '@modules/indigenous/v2/services/GetIndigenousInterviewByIdService';

export class GetIndigenousInterviewByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const loggedUserId = request?.user?.id;
    const loggedUserRole = request?.user?.role;

    const getIndigenousInterviewByIdService = container.resolve(
      GetIndigenousInterviewByIdService,
    );

    const interview = await getIndigenousInterviewByIdService.execute({
      interviewId: id,
      loggedUserId,
      loggedUserRole,
    });

    return response.json(classToClass(interview));
  }
}

