import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateInterviewLifeQualityViolenceUseCase } from '@modules/interviews/services/CreateInterviewLifeQualityViolenceUseCase';

export class CreateInterviewLifeQualityViolenceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createInterviewLifeQualityViolenceUseCase = container.resolve(
      CreateInterviewLifeQualityViolenceUseCase,
    );

    await createInterviewLifeQualityViolenceUseCase.execute(data);

    return response.status(201).json();
  }
}
