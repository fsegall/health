export default interface ICreatePersonDTO {
  interviewer_id: string;
  name: string;
  age: number;
  gender: string;
  race_color: string;
  literacy: string;
  education: string;
  work_status: string;
  work_shift_reduction?: string;
  covid_diagnose: string;
}
