// index, show, create, update, delete

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProjectService from '@modules/projects/services/CreateProjectService';
import ListProjectsService from '@modules/projects/services/ListProjectsService';

export default class ProjectsController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listProjects = container.resolve(ListProjectsService);
    const projects = await listProjects.execute();
    return response.status(200).json(projects);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, name, project_number, organizations } = request.body;

    const createProject = container.resolve(CreateProjectService);

    const project = await createProject.execute({
      user_id,
      name,
      project_number,
      organizations,
    });

    return response.status(201).json(project);
  }
}
