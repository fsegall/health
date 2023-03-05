import { injectable, inject } from 'tsyringe';

import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';

import Project from '../infra/typeorm/entities/Project';

@injectable()
export default class ListProjectsService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}
  public async execute(): Promise<Project[]> {
    const projects = await this.projectsRepository.list();
    return projects;
  }
}
