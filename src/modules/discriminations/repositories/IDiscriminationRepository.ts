import { ICreateDiscriminationDTO } from '../dtos/ICreateDiscriminationDTO';
import { Discrimination } from '../infra/typeorm/entities/Discrimination';

export interface IDiscriminationRepository {
  create(data: ICreateDiscriminationDTO): Promise<Discrimination>;
}
