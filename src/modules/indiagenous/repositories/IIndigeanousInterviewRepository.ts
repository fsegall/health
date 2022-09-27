import { ICreateIndigeanousInterviewDTO } from '../dtos/ICreateIndigeanousInterviewDTO';
import { IndigeanousInterview } from '../infra/typeorm/entities/IndiagenousInterview';

export interface IIndigeanousInterviewRepository {
  create(data: ICreateIndigeanousInterviewDTO): Promise<IndigeanousInterview>;
  findById(id: string): Promise<IndigeanousInterview | undefined>;
}
