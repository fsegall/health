import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import { GetIndigenousInterviewByIdService } from '@modules/indigenous/v2/services/GetIndigenousInterviewByIdService';

export class GetIndigenousInterviewByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const loggedUserId = request?.user?.id;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(loggedUserId);

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    const getIndigenousInterviewByIdService = container.resolve(
      GetIndigenousInterviewByIdService,
    );

    const interview = await getIndigenousInterviewByIdService.execute({
      interviewId: id,
      loggedUserId,
      loggedUserRole: user.role,
    });

    return response.json(classToClass(interview));
  }
}
