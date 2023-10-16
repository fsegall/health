import { ICreateDiscriminationDTO } from '../dtos/ICreateDiscriminationDTO';

export interface IDiscriminationRepository {
  create(data: ICreateDiscriminationDTO): Promise<void>;
}
