import { IndigeanousDemography } from '../infra/typeorm/entities/IndiagenousDemography';
import { ICreateIndigeanousInterviewDemography } from './interfaces/ICreateIndigeanousInterviewDemography';

export interface IIndigeanousInterviewDemographyRepository {
  create(
    data: ICreateIndigeanousInterviewDemography,
  ): Promise<IndigeanousDemography>;
}
