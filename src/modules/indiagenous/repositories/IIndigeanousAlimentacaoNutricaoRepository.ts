import { ICreateIndigeanousAlimentacaoNutricao } from './interfaces/ICreateIndigeanousAlimentacaoNutricao';

export interface IIndigeanousAlimentacaoNutricaoRepository {
  create(data: ICreateIndigeanousAlimentacaoNutricao): Promise<void>;
}
