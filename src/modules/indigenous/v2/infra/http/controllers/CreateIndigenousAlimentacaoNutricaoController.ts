import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigenousAlimentacaoNutricaoDTO } from '@modules/indigenous/v2/dtos/ICreateIndigenousAlimentacaoNutricaoDTO';
import { CreateIndigenousAlimentacaoNutricaoService } from '@modules/indigenous/v2/services/CreateIndigenousAlimentacaoNutricaoService';

export class CreateIndigenousAlimentacaoNutricaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigenousAlimentacaoNutricaoDTO = request.body;

    const createIndigeanousAlimentacaoNutricaoService = container.resolve(
      CreateIndigenousAlimentacaoNutricaoService,
    );

    const indigenousNutrition =
      await createIndigeanousAlimentacaoNutricaoService.execute(data);

    return response.status(201).json(indigenousNutrition);
  }
}
