import { IndigeanousApoio } from '../infra/typeorm/entities/IndigeanousApoio';
import { ICreateIndigeanousApoio } from './interfaces/ICreateIndigeanousApoio';

export interface IIndigeanousApoioRepository {
  create(data: ICreateIndigeanousApoio): Promise<IndigeanousApoio>;
}
