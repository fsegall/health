import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigeanousSaudeDoencaDTO } from '@modules/indiagenous/dtos/ICreateIndigeanousSaudeDoencaDTO';
import { CreateIndigeanousSaudeDoencaService } from '@modules/indiagenous/services/CreateIndigeanousSaudeDoencaService';

export class CreateIndigeanousSaudeDoencaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigeanousSaudeDoencaDTO = request.body;

    const createIndigeanousSaudeDoencaService = container.resolve(
      CreateIndigeanousSaudeDoencaService,
    );

    const indigenousSaudeDoenca =
      await createIndigeanousSaudeDoencaService.execute(data);

    return response.status(201).json(indigenousSaudeDoenca);
  }
}
