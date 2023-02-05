import { IListAndCountIndigenousInterviewsDTO } from '../dtos/IListAndCountIndigenousInterviewsDTO';
import { IndigenousInterview } from '../infra/typeorm/entities/IndigenousInterview';
import { ICreateIndigenousInterview } from './interfaces/ICreateIndigenousInterview';
import { ListIndigenousInterviewParams } from './interfaces/IListAndCountIndigenousInterviewParams';

export interface IIndigenousInterviewRepository {
  create(data: ICreateIndigenousInterview): Promise<IndigenousInterview>;
  findById(id: string): Promise<IndigenousInterview | undefined>;
  findByInterviewDateAndInterviewer(
    date: Date,
    interviewerId: string,
  ): Promise<IndigenousInterview | undefined>;
  listAndCount(
    data: ListIndigenousInterviewParams,
  ): Promise<IListAndCountIndigenousInterviewsDTO>;
}
