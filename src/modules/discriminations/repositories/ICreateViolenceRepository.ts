import { ICreateViolenceDTO } from '../dtos/ICreateViolenceDTO';
import { Violence } from '../infra/typeorm/entities/Violence';

export interface IViolenceRepository {
  create(data: ICreateViolenceDTO): Promise<Violence>;
}
