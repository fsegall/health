import { IndigenousApoioEProtecao } from '../infra/typeorm/entities/IndigenousApoioEProtecao';
import { ICreateIndigenousApoioEProtecao } from './interfaces/ICreateIndigenousApoioEProtecao';

export interface IIndigenousApoioEProtecaoRepository {
  create(
    data: ICreateIndigenousApoioEProtecao,
  ): Promise<IndigenousApoioEProtecao>;
}
