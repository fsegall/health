// index, show, create, update, delete

import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';
import CreateInterviewService from '@modules/interviews/services/CreateInterviewService';
import ListInterviewsService from '@modules/interviews/services/ListInterviewsService';
import ListInterviewsByInterviewerService from '@modules/interviews/services/ListInterviewsByInterviewerService';
import FindInterviewsService from '@modules/interviews/services/FindInterviewService';
/* import ListinterviewsService from '@modules/interviews/services/ListinterviewsService';
import UpdateinterviewService from '@modules/interviews/services/UpdateinterviewService';
import Showinterviewservice from '@modules/interviews/services/ShowinterviewService';
import Deleteinterviewservice from '@modules/interviews/services/DeleteinterviewService'; */
export default class interviewsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      interviewer_id,
      project_name,
      project_number,
      person_id,
      household_id,
      address_id,
      is_complete,
      is_complete_with_errors,
      interview_type,
      comments,
    } = request.body;



    const createInterview = container.resolve(CreateInterviewService);


    const interview = await createInterview.execute({
      interviewer_id,
      project_name,
      project_number,
      person_id,
      household_id,
      address_id,
      is_complete,
      is_complete_with_errors,
      interview_type,
      comments,
    });

    return response.status(201).json(classToClass(interview));
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listInterviews = container.resolve(ListInterviewsService);
    const interviews = await listInterviews.execute();

    return response.json(classToClass(interviews));
  }

  public async listByInterviewer(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listInterviews = container.resolve(ListInterviewsByInterviewerService);

    const interview = await listInterviews.execute({ interviewer_id: id });

    return response.json(classToClass(interview));
  }

  public async handleOfflineInterviews(request: Request, response: Response): Promise<Response> {
    const offlineInterviews = request.body

    const handleFindInterviews = container.resolve(FindInterviewsService);

    const notSavedInterviews = await handleFindInterviews.handleAllOfflineInterviews(offlineInterviews)

    const stillNotSavedInterviews = await handleFindInterviews.handleAllOfflineInterviews(notSavedInterviews)

    return response.status(201).json(stillNotSavedInterviews)
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
