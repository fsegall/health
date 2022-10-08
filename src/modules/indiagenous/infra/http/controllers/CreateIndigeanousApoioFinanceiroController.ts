import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigeanousApoioFinanceiroDTO } from '@modules/indiagenous/dtos/ICreateIndigeanousApoioFinanceiroDTO';
import { CreateIndigeanousApoioFinanceiroService } from '@modules/indiagenous/services/CreateIndigeanousApoioFinanceiroService';

export class CreateIndigeanousApoioFinanceiroController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigeanousApoioFinanceiroDTO = request.body;

    const createIndigeanousApoioFinanceiroService = container.resolve(
      CreateIndigeanousApoioFinanceiroService,
    );

    await createIndigeanousApoioFinanceiroService.execute(data);

    return response.status(201).send();
  }
}
