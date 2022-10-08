import { ICreateIndigeanousApoio } from './interfaces/ICreateIndigeanousApoio';

export interface IIndigeanousApoioRepository {
  create(data: ICreateIndigeanousApoio): Promise<void>;
}
