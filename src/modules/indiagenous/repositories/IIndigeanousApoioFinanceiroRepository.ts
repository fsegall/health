import { ICreateIndigeanousApoioFinanceiro } from './interfaces/ICreateIndigeanousApoioFinanceiro';

export interface IIndigeanousApoioFinanceiroRepository {
  create(data: ICreateIndigeanousApoioFinanceiro): Promise<void>;
}
