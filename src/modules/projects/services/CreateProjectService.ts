import { injectable, inject } from 'tsyringe';

import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import AppError from '@shared/errors/AppError';

import Project from '../infra/typeorm/entities/Project';

interface IRequest {
  user_id: string;
  name: string;
  project_number: number;
  organizations: string;
}

@injectable()
export default class CreateProjectService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}
  public async execute({
    user_id,
    name,
    project_number,
    organizations,
  }: IRequest): Promise<Project> {
    const parsedName = name.toUpperCase();

    const projectNameExists = await this.projectsRepository.findByName(
      parsedName,
    );

    if (projectNameExists) {
      throw new AppError(
        `Já existe um projeto cadastrado com este nome: ${name}`,
      );
    }

    const projectNumberExists = await this.projectsRepository.findByNumber(
      project_number,
    );

    if (projectNumberExists) {
      throw new AppError(
        `Já existe um projeto cadastrado com este número: ${project_number}`,
      );
    }

    const project: Project = await this.projectsRepository.create({
      user_id,
      name: parsedName,
      project_number,
      organizations,
    });

    await this.projectsRepository.save(project);

    return project;
  }
}
