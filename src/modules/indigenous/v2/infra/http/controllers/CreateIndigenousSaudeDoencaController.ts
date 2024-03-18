import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigenousSaudeDoencaDTO } from '@modules/indigenous/dtos/ICreateIndigenousSaudeDoencaDTO';
import { CreateIndigeanousSaudeDoencaService } from '@modules/indigenous/services/CreateIndigenousSaudeDoencaService';

export class CreateIndigenousSaudeDoencaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigenousSaudeDoencaDTO = request.body;

    const createIndigeanousSaudeDoencaService = container.resolve(
      CreateIndigeanousSaudeDoencaService,
    );

    const indigenousSaudeDoenca = await createIndigeanousSaudeDoencaService.execute(
      data,
    );

    return response.status(201).json(indigenousSaudeDoenca);
  }
}
