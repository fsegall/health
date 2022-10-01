import { IndigeanousInterview } from '../infra/typeorm/entities/IndiagenousInterview';
import { ICreateIndigeanousInterview } from './interfaces/ICreateIndigeanousInterview';

export interface IIndigeanousInterviewRepository {
  create(data: ICreateIndigeanousInterview): Promise<IndigeanousInterview>;
  findById(id: string): Promise<IndigeanousInterview | undefined>;
}
