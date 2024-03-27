import { IndigenousResidence } from '../infra/typeorm/entities/IndigenousResidence';
import { ICreateIndigenousInterviewResidence } from './interfaces/ICreateIndigeanousInterviewResidence';

export interface IIndigenousInterviewResidenceRepository {
  create(
    data: ICreateIndigenousInterviewResidence,
  ): Promise<IndigenousResidence>;
}
