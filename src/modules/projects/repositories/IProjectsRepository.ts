import ICreateProjectDTO from '@modules/projects/dtos/ICreateProjectDTO';
import Project from '@modules/projects/infra/typeorm/entities/Project';

export default interface IProjectsRepository {
  create(data: ICreateProjectDTO): Promise<Project>;
  findByName(project_name: string): Promise<Project | undefined>;
  findByNumber(project_number: number): Promise<Project | undefined>;
  save(project: Project): Promise<Project>;
}
