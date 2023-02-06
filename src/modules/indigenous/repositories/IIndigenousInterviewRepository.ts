import { IListAndCountIndigenousInterviewsDTO } from '../dtos/IListAndCountIndigenousInterviewsDTO';
import { IndigenousInterview } from '../infra/typeorm/entities/IndigenousInterview';
import { ICreateIndigenousInterview } from './interfaces/ICreateIndigenousInterview';

export interface IIndigenousInterviewRepository {
  create(data: ICreateIndigenousInterview): Promise<IndigenousInterview>;
  findById(id: string): Promise<IndigenousInterview | undefined>;
  findByInterviewDateAndInterviewer(
    date: Date,
    interviewerId: string,
  ): Promise<IndigenousInterview | undefined>;
  listAndCount(data: {
    page: number;
    limit: number;
    loggedUserId: string;
  }): Promise<IListAndCountIndigenousInterviewsDTO>;
}
