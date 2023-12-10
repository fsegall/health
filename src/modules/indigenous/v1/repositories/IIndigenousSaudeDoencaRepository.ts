import { IndigeanousSaudeDoenca } from '../infra/typeorm/entities/IndigenousSaudeDoenca';
import { ICreateIndigenousSaudeDoenca } from './interfaces/ICreateIndigenousSaudeDoenca';

export interface IIndigenousSaudeDoencaRepository {
  create(data: ICreateIndigenousSaudeDoenca): Promise<IndigeanousSaudeDoenca>;
}
