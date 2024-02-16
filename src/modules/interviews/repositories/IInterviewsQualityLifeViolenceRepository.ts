import { ICreateInterviewLifeQualityViolenceDTO } from '../dtos/ICreateInterviewLifeQualityViolenceDTO';

export interface IInterviewsLifeQualityViolenceRepository {
  create(data: ICreateInterviewLifeQualityViolenceDTO): Promise<void>;
}
