import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigeanousAlimentacaoNutricaoDTO } from '@modules/indiagenous/dtos/ICreateIndigeanousAlimentacaoNutricaoDTO';
import { CreateIndigeanousAlimentacaoNutricaoService } from '@modules/indiagenous/services/CreateIndigeanousAlimentacaoNutricaoService';

export class CreateIndigeanousAlimentacaoNutricaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigeanousAlimentacaoNutricaoDTO = request.body;

    const createIndigeanousAlimentacaoNutricaoService = container.resolve(
      CreateIndigeanousAlimentacaoNutricaoService,
    );

    await createIndigeanousAlimentacaoNutricaoService.execute(data);

    return response.status(201).send();
  }
}
