import { ICreateInterviewLifeQualityMentalHealthDTO } from '../dtos/ICreateInterviewLifeQualityMentalHealthDTO';

export interface IInterviewLifeQualityMentalHealthRepository {
  create(data: ICreateInterviewLifeQualityMentalHealthDTO): Promise<void>;
}
