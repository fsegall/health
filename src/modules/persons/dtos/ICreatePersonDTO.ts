export default interface ICreatePersonDTO {
  interviewer_id: string;
  /*   name: string;
    age: number;
    gender: string;
    race_color: string;
    literacy: string;
    education: string;
    work_status: string;
    work_shift_reduction?: string;
    covid_diagnose: string; */
  nome: string;
  idade: number;
  sexo: string;
  raca_cor: string;
  ler_escrever: string;
  escolaridade: string;
  situacao_de_trabalho: string;
  ocupacao: string;
  local_de_trabalho: string;
  diagnostico_covid: string;
}
