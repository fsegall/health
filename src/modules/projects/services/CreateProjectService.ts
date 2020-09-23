import Project from '../infra/typeorm/entities/Project';
import { injectable, inject } from 'tsyringe';
import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import AppError from '@shared/errors/AppError';

/* import AppError from '@shared/errors/AppError'; */

interface IRequest {
  user_id: string;
  name: string;
  organizations: string;
}

@injectable()
export default class CreateProjectService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository
  ) { }
  public async execute({
    user_id,
    name,
    organizations,
  }: IRequest): Promise<Project> {

    const projectExists = this.projectsRepository.findByName(name);

    if (projectExists) {
      throw new AppError(`Já existe um projeto cadastrado com este nome: ${name}`)
    }

    const project: Project = await this.projectsRepository.create({
      user_id,
      name,
      organizations,
    });

    await this.projectsRepository.save(project);

    return project;
  }
}
