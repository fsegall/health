import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { InterviewLifeQualityMentalHealthUseCase } from '@modules/interviews/services/InterviewLifeQualityMentalHealthUseCase';

export class InterviewLifeQualityMentalHealthController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const interviewLifeQualityMentalHealthUseCase = container.resolve(
      InterviewLifeQualityMentalHealthUseCase,
    );

    await interviewLifeQualityMentalHealthUseCase.execute(data);

    return response.status(201).json();
  }
}
