export default interface ICreateInterviewDTO {
  interviewer_id: string;
  project_name: string;
  project_number: number;
  project_id: string;
  person_id: string;
  household_id: string;
  address_id: string;
  is_complete: boolean;
  is_complete_with_errors: boolean;
  interview_type: string;
  comments?: string;
}


