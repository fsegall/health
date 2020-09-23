// index, show, create, update, delete

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProjectService from '@modules/projects/services/CreateProjectService';
/* import ListProjectsService from '@modules/projects/services/ListProjectsService';
import UpdateProjectService from '@modules/projects/services/UpdateProjectService';
import ShowProjectservice from '@modules/projects/services/ShowProjectService';
import DeleteProjectservice from '@modules/projects/services/DeleteProjectService'; */
export default class ProjectsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      user_id,
      name,
      organizations,
    } = request.body;

    const createProject = container.resolve(CreateProjectService);

    const project = await createProject.execute({
      user_id,
      name,
      organizations,
    });

    return response.status(201).json(project);
  }

  /* public async list(request: Request, response: Response): Promise<Response> {
    const listProjects = container.resolve(ListProjectsService);
    const projects = await listProjects.execute();

    return response.json(projects);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const {


    } = request.body;
    const updateProject = container.resolve(UpdateProjectService);
    const project = await updateProject.execute({

    });

    return response.json(project);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProject = container.resolve(ShowProjectService);

    const project = await showProject.execute({ person_id: id });

    return response.json(project);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProject = container.resolve(DeleteProjectService);

    const project = await deleteProject.execute({ person_id: id });

    return response.json(project);
  } */
}
