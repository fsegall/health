import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateIndigeanousInterviewService } from '@modules/indiagenous/services/CreateIndigeanousInterviewService';

export class CreateIndigeanousInterviewController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      acampamento,
      aldeia_comunidade,
      area_retomada,
      data_entrevista,
      entrevistador_id,
      municipio,
      numero_projeto,
      primeiro_contato_responsavel,
      terra_indigena,
    } = request.body;

    const createIndigeanousInterviewService = container.resolve(
      CreateIndigeanousInterviewService,
    );

    const indigeanousInterview = await createIndigeanousInterviewService.execute(
      {
        acampamento,
        aldeia_comunidade,
        area_retomada,
        data_entrevista,
        entrevistador_id,
        municipio,
        numero_projeto,
        primeiro_contato_responsavel,
        terra_indigena,
      },
    );

    return response.status(201).json(indigeanousInterview);
  }
}
