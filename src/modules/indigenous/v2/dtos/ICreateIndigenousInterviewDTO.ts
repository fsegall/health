export interface ICreateIndigenousInterviewDTO {
  municipio: string;

  aldeia_comunidade: string;

  tipo_comunidade: string;

  entrevistador_id: string;

  projeto_numero: number;

  project_id: string;

  data_entrevista: Date;

  responsavel_documentos: string[];
}
