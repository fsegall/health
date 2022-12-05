import { IndigeanousResidence } from '../infra/typeorm/entities/IndigeanousResidence';
import { ICreateIndigeanousInterviewResidence } from './interfaces/ICreateIndigeanousInterviewResidence';

export interface IIndigeanousInterviewResidenceRepository {
  create(
    data: ICreateIndigeanousInterviewResidence,
  ): Promise<IndigeanousResidence>;
}
