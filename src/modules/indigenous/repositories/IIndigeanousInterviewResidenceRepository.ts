import { IndigenousResidence } from '../infra/typeorm/entities/IndigenousResidence';
import { ICreateIndigeanousInterviewResidence } from './interfaces/ICreateIndigeanousInterviewResidence';

export interface IIndigeanousInterviewResidenceRepository {
  create(
    data: ICreateIndigeanousInterviewResidence,
  ): Promise<IndigenousResidence>;
}
