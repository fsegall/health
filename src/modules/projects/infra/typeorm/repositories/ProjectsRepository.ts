import { getRepository, Repository } from 'typeorm';

import ICreateProjectDTO from '@modules/projects/dtos/ICreateProjectDTO';
import Project from '@modules/projects/infra/typeorm/entities/Project';
import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';

class ProjectsRepository implements IProjectsRepository {
  private ormRepository: Repository<Project>;

  constructor() {
    this.ormRepository = getRepository(Project);
  }

  public async list(): Promise<Project[]> {
    const projects = await this.ormRepository.find();
    return projects;
  }

  public async create({
    user_id,
    name,
    project_number,
    organizations,
  }: ICreateProjectDTO): Promise<Project> {
    const organizationsArray: string[] = organizations
      .split(',')
      .map(org => org.trim());

    const project = this.ormRepository.create({
      user_id,
      name,
      project_number,
      organizations: organizationsArray,
    });

    await this.ormRepository.save(project);
    return project;
  }

  public async save(project: Project): Promise<Project> {
    return this.ormRepository.save(project);
  }

  public async findByName(project_name: string): Promise<Project | undefined> {
    const project = await this.ormRepository.findOne({
      where: { name: project_name },
    });

    return project;
  }

  public async findByNumber(
    project_number: number,
  ): Promise<Project | undefined> {
    const project = await this.ormRepository.findOne({
      where: { project_number },
    });

    return project;
  }

  public async findById(project_id: string): Promise<Project | undefined> {
    const project = await this.ormRepository.findOne({
      where: { id: project_id },
    });
    return project;
  }

  /*   

    public async findInterviews(): Promise<Project[] | undefined> {
      const projectWithInterviews = await this.ormRepository.find({ relations: ['interviews'] });
      return projectWithInterviews;
    }

    public async list(): Promise<Project[]> {
      const projects = this.ormRepository.find();
      return projects;
    }


    public async delete(project_id: string): Promise<void> {
      const project = await this.ormRepository.findOne(project_id);

      if (!project) {
        throw new AppError('There is no project with this id.');
      }
      await this.ormRepository.remove(project);
    } */
}

export default ProjectsRepository;
