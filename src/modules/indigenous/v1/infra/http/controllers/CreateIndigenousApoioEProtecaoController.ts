import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigenousApoioEProtecaoDTO } from '@modules/indigenous/dtos/ICreateIndigenousApoioEProtecaoDTO';
import { CreateIndigenousApoioEProtecaoService } from '@modules/indigenous/services/CreateIndigenousApoioEProtecaoService';

export class CreateIndigenousApoioEProtecaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigenousApoioEProtecaoDTO = request.body;

    const createIndigeanousApoioFinanceiroService = container.resolve(
      CreateIndigenousApoioEProtecaoService,
    );

    const indigenousSupport = await createIndigeanousApoioFinanceiroService.execute(
      data,
    );

    return response.status(201).json(indigenousSupport);
  }
}
