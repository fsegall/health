import { getRepository, Repository } from 'typeorm';
import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';
import ICreateInterviewDTO from '@modules/interviews/dtos/ICreateInterviewDTO';
import Interview from '@modules/interviews/infra/typeorm/entities/Interview';
/* import AppError from '@shared/errors/AppError'; */

class InterviewsRepository implements IInterviewsRepository {
  private ormRepository: Repository<Interview>;

  constructor() {
    this.ormRepository = getRepository(Interview);
  }

  public async create({
    interviewer_id,
    project_name,
    project_number,
    project_id,
    person_id,
    household_id,
    address_id,
    is_complete,
    interview_type,
    comments,
  }: ICreateInterviewDTO): Promise<Interview> {
    const interview = this.ormRepository.create({
      interviewer_id,
      project_name,
      project_number,
      project_id,
      person_id,
      household_id,
      address_id,
      is_complete,
      interview_type,
      comments,
    });
    await this.ormRepository.save(interview);
    return interview;
  }

  public findByPersonId(person_id: string): Promise<Interview | undefined> {
    return this.ormRepository.findOne({
      where: {
        person_id
      }
    });
  }

  public async save(interview: Interview): Promise<Interview> {
    return this.ormRepository.save(interview);
  }

  /*   public async findById(interview_id: string): Promise<Interview | undefined> {
      const interview = await this.ormRepository.findOne(interview_id);
      return interview;
    }

    public async list(): Promise<Interview[]> {
      console.log('houses');
      const interviews = this.ormRepository.find();
      return interviews;
    }

    public async delete(Interview_id: string): Promise<void> {
      const interview = await this.ormRepository.findOne(Interview_id);

      if (!interview) {
        throw new AppError('There is no Interview with this id.');
      }
      await this.ormRepository.remove(interview);
    } */

}

export default InterviewsRepository;
