import { getRepository, Repository } from 'typeorm';
import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';
import ICreateInterviewDTO from '@modules/interviews/dtos/ICreateInterviewDTO';
import Interview from '@modules/interviews/infra/typeorm/entities/Interview';
import { Exception } from 'handlebars';
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
    is_complete_with_errors,
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
      is_complete_with_errors,
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

  public async findOne(interviewId: string): Promise<Interview> {
    const foundInterview = await this.ormRepository.findOne(interviewId, {
      relations: ['interviewer', 'person', 'project', 'address', 'household']
    })
    if (!foundInterview) {
      throw new Exception('INTERVIEW_NOT_FOUND')
    }
    return foundInterview
  }

  public async save(interview: Interview): Promise<Interview> {
    return await this.ormRepository.save(interview);
  }

  public async list(): Promise<Interview[]> {
    const interviews = await this.ormRepository.find();
    return interviews;
  }

  public async listByInterviewer(interviewer_id: string): Promise<Interview[]> {
    const interviews = await this.ormRepository.find({
      where: {
        interviewer_id
      }
    });
    return interviews;
  }

  public async findAlreadyRegistered({
    person_nome, person_idade, project_number, interviewer_id
  }: {
    person_nome: string, person_idade: number, project_number: number, interviewer_id: string
  }): Promise<Boolean> {
    const foundInterview: Interview | undefined = await this.ormRepository.findOne({
      join: { alias: 'interview', innerJoin: { person: 'interview.person' }},
      where: (qb: any) => {
        qb.where({
          project_number,
          interviewer_id,
        }).andWhere('person.nome = :person_nome' , { person_nome })
        .andWhere('person.idade = :person_idade' , { person_idade })
      }
    })
    if (foundInterview) {
      return true
    } else {
      return false
    }
  }

  /*   public async findById(interview_id: string): Promise<Interview | undefined> {
      const interview = await this.ormRepository.findOne(interview_id);
      return interview;
    }

    public async list(): Promise<Interview[]> {
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
