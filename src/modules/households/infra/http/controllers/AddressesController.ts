import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAddressService from '@modules/households/services/CreateAddressService';

export default class AddressesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const serv = container.resolve(CreateAddressService);

    const created = await serv.execute(data);

    return response.status(201).json(created);
  }
}
