import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateIndigeanousAlimentacaoNutricaoDTO } from '@modules/indigenous/dtos/ICreateIndigeanousAlimentacaoNutricaoDTO';
import { CreateIndigeanousAlimentacaoNutricaoService } from '@modules/indigenous/services/CreateIndigeanousAlimentacaoNutricaoService';

export class CreateIndigeanousAlimentacaoNutricaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateIndigeanousAlimentacaoNutricaoDTO = request.body;

    const createIndigeanousAlimentacaoNutricaoService = container.resolve(
      CreateIndigeanousAlimentacaoNutricaoService,
    );

    const indigenousNutrition =
      await createIndigeanousAlimentacaoNutricaoService.execute(data);

    return response.status(201).json(indigenousNutrition);
  }
}
