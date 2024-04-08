import { ICreateMentalHealthDTO } from '../dtos/ICreateMentalHealthDTO';
import { MentalHealth } from '../infra/typeorm/entities/MentalHealth';

export interface IMentalHealthRepository {
  create(data: ICreateMentalHealthDTO): Promise<MentalHealth>;
}
