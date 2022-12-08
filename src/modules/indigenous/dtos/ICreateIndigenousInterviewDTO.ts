import { IndigenousComunityType } from '../enums/IndigenousComunityType';

export interface ICreateIndigenousInterviewDTO {
  municipio: string;

  aldeia_comunidade: string;

  tipo_comunidade: IndigenousComunityType;

  entrevistador_id: string;

  projeto_id: string;

  data_entrevista: Date;

  responsavel_domicilio: boolean;

  numero_projeto: number;
}
