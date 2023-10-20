import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateDiscriminationService } from '../services/CreateDiscriminationService';

export class CreateDiscriminationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createDiscriminationService = container.resolve(
      CreateDiscriminationService,
    );

    await createDiscriminationService.execute(data);

    return response.status(201);
  }
}
