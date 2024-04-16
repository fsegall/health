import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateMentalHealthService } from '../services/CreateMentalHealthService';

export class CreateMentalHealthController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createMentalHealthService = container.resolve(
      CreateMentalHealthService,
    );

    const created = await createMentalHealthService.execute(data);

    return response.status(201).json(created);
  }
}
