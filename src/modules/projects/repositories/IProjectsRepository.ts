import Project from '@modules/projects/infra/typeorm/entities/Project';
import Interview from '@modules/interviews/infra/typeorm/entities/Interview';
import ICreateProjectDTO from '@modules/projects/dtos/ICreateProjectDTO';
export default interface IProjectsRepository {
  create(data: ICreateProjectDTO): Promise<Project>;
  findByName(project_name: string): Promise<Project | undefined>;
  /*   findById(project_id: string): Promise<Project | undefined>;
    list(): Promise<Project[]>;
    save(project: Project): Promise<Project>;
    delete(project_id: string): Promise<void>; */
  save(project: Project): Promise<Project>;
}
