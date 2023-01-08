import Interview from '@modules/interviews/infra/typeorm/entities/Interview';
import ICreateInterviewDTO from '@modules/interviews/dtos/ICreateInterviewDTO';
export default interface IInterviewsRepository {
  create(data: ICreateInterviewDTO): Promise<Interview>;
  save(interview: Interview): Promise<Interview>;
  findByPersonId(person_id: string): Promise<Interview | undefined>;
  list(): Promise<Interview[]>
  listByInterviewer(interviewer_id: string): Promise<Interview[]>
  findAlreadyRegistered({
    person_nome,
    person_idade,
    project_number,
    interviewer_id,
  }: {
    person_nome: string, person_idade: number, project_number: number, interviewer_id: string
  }): Promise<boolean>
  findOne(interviewId: string): Promise<Interview>
  /*   findById(interview_id: string): Promise<Interview | undefined>;
    list(): Promise<Interview[]>;
    delete(interview_id: string): Promise<void>; */
}
