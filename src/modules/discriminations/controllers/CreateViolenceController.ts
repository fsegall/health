import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateViolenceService } from '../services/CreateViolenceService';

export class CreateViolenceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createViolenceService = container.resolve(CreateViolenceService);

    const created = await createViolenceService.execute(data);

    return response.status(201).json(created);
  }
}
