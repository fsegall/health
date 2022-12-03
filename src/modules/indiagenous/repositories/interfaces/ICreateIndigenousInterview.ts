import { IndigenousComunityType } from '@modules/indiagenous/enums/IndigenousComunityType';

export interface ICreateIndigenousInterview {
  municipio: string;

  aldeia_comunidade: string;

  tipo_comunidade: IndigenousComunityType;

  entrevistador_id: string;

  projeto_id: string;

  data_entrevista: Date;

  responsavel_domicilio: boolean;
}
