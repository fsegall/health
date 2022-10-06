import { IndigeanousSaudeDoenca } from '../infra/typeorm/entities/IndigeanousSaudeDoenca';
import { ICreateIndigeanousSaudeDoenca } from './interfaces/ICreateIndigenousSaudeDoenca';

export interface IIndigeanousSaudeDoencaRepository {
  create(data: ICreateIndigeanousSaudeDoenca): Promise<IndigeanousSaudeDoenca>;
}
