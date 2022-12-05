import { IndigeanousAlimentacaoNutricao } from '../infra/typeorm/entities/IndigeanousAlimentacaoNutricao';
import { ICreateIndigeanousAlimentacaoNutricao } from './interfaces/ICreateIndigeanousAlimentacaoNutricao';

export interface IIndigeanousAlimentacaoNutricaoRepository {
  create(
    data: ICreateIndigeanousAlimentacaoNutricao,
  ): Promise<IndigeanousAlimentacaoNutricao>;
}
