import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import { GetIndigenousInterviewByIdService } from '@modules/indigenous/v2/services/GetIndigenousInterviewByIdService';

export class GetIndigenousInterviewByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const loggedUserId = request?.user?.id;

      console.log('[DEBUG GetIndigenousInterviewById]', {
        interviewId: id,
        loggedUserId,
      });

      const usersRepository = new UsersRepository();
      const user = await usersRepository.findById(loggedUserId);

      if (!user) {
        console.log('[DEBUG GetIndigenousInterviewById] User not found:', loggedUserId);
        return response.status(404).json({ message: 'User not found' });
      }

      console.log('[DEBUG GetIndigenousInterviewById] User role:', user.role);

      const getIndigenousInterviewByIdService = container.resolve(
        GetIndigenousInterviewByIdService,
      );

      const interview = await getIndigenousInterviewByIdService.execute({
        interviewId: id,
        loggedUserId,
        loggedUserRole: user.role,
      });

      return response.json(classToClass(interview));
    } catch (error) {
      console.error('[ERROR GetIndigenousInterviewById]', error);
      const errorMessage = error instanceof Error ? error.message : 'Internal server error';
      const statusCode = (error as any)?.statusCode || 500;
      return response.status(statusCode).json({ message: errorMessage });
    }
  }
}
