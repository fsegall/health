import Interview from '@modules/interviews/infra/typeorm/entities/Interview';
import ICreateInterviewDTO from '@modules/interviews/dtos/ICreateInterviewDTO';
export default interface IInterviewsRepository {
  create(data: ICreateInterviewDTO): Promise<Interview>;
  save(interview: Interview): Promise<Interview>;
  findByPersonId(person_id: string): Promise<Interview | undefined>;
  /*   findById(interview_id: string): Promise<Interview | undefined>;
    list(): Promise<Interview[]>;
    delete(interview_id: string): Promise<void>; */
}
