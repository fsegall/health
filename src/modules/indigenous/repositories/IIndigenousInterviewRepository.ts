import { IndigenousInterview } from '../infra/typeorm/entities/IndigenousInterview';
import { ICreateIndigenousInterview } from './interfaces/ICreateIndigenousInterview';

export interface IIndigenousInterviewRepository {
  create(data: ICreateIndigenousInterview): Promise<IndigenousInterview>;
  findById(id: string): Promise<IndigenousInterview | undefined>;
  list(): Promise<IndigenousInterview[]>;
}
