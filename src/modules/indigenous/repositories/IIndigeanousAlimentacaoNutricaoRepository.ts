import { IndigenousAlimentacaoNutricao } from '../infra/typeorm/entities/IndigenousAlimentacaoNutricao';
import { ICreateIndigenousAlimentacaoNutricao } from './interfaces/ICreateIndigeanousAlimentacaoNutricao';

export interface IIndigenousAlimentacaoNutricaoRepository {
  create(
    data: ICreateIndigenousAlimentacaoNutricao,
  ): Promise<IndigenousAlimentacaoNutricao>;
}
