import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigeanousApoioFinanceiroDTO } from '@modules/indiagenous/dtos/ICreateIndigeanousApoioFinanceiroDTO';
import { CreateIndigeanousApoioService } from '@modules/indiagenous/services/CreateIndigeanousApoioService';

export class CreateIndigeanousApoioFinanceiroController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigeanousApoioFinanceiroDTO = request.body;

    const createIndigeanousApoioFinanceiroService = container.resolve(
      CreateIndigeanousApoioService,
    );

    const indigenousSupport =
      await createIndigeanousApoioFinanceiroService.execute(data);

    return response.status(201).json(indigenousSupport);
  }
}
