// index, show, create, update, delete

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateInterviewService from '@modules/interviews/services/CreateInterviewService';
/* import ListinterviewsService from '@modules/interviews/services/ListinterviewsService';
import UpdateinterviewService from '@modules/interviews/services/UpdateinterviewService';
import Showinterviewservice from '@modules/interviews/services/ShowinterviewService';
import Deleteinterviewservice from '@modules/interviews/services/DeleteinterviewService'; */
export default class interviewsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      interviewer_id,
      project_id,
      person_id,
      household_id,
      address_id,
      is_complete,
      interview_type,
      comments,
    } = request.body;

    const createInterview = container.resolve(CreateInterviewService);

    const interview = await createInterview.execute({
      interviewer_id,
      project_id,
      person_id,
      household_id,
      address_id,
      is_complete,
      interview_type,
      comments,
    });

    return response.status(201).json(interview);
  }

  /* public async list(request: Request, response: Response): Promise<Response> {
    const listInterviews = container.resolve(ListInterviewsService);
    const interviews = await listInterviews.execute();

    return response.json(interviews);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const {


    } = request.body;
    const updateInterview = container.resolve(UpdateInterviewService);
    const interview = await updateInterview.execute({

    });

    return response.json(interview);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showInterview = container.resolve(ShowInterviewService);

    const interview = await showInterview.execute({ interview_id: id });

    return response.json(interview);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteInterview = container.resolve(DeleteInterviewService);

    const interview = await deleteInterview.execute({ interview_id: id });

    return response.json(interview);
  } */
}
