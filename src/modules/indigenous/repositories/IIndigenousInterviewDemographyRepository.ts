import { IndigenousDemography } from '../infra/typeorm/entities/IndigenousDemography';
import { ICreateIndigenousInterviewDemography } from './interfaces/ICreateIndigenousInterviewDemography';

export interface IIndigenousInterviewDemographyRepository {
  create(
    data: ICreateIndigenousInterviewDemography,
  ): Promise<IndigenousDemography>;
}
