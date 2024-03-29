// index, show, create, update, delete

import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import HandleOfflineInterviewService from '@modules/interviews/services/CreateAllStepsOfOfflineInterview';
import CreateInterviewService from '@modules/interviews/services/CreateInterviewService';
import ListInterviewsByInterviewerService from '@modules/interviews/services/ListInterviewsByInterviewerService';
import ListInterviewsService from '@modules/interviews/services/ListInterviewsService';

export default class interviewsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createInterview = container.resolve(CreateInterviewService);

    const interview = await createInterview.execute(data);

    return response.status(201).json(classToClass(interview));
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listInterviews = container.resolve(ListInterviewsService);
    const interviews = await listInterviews.execute();

    return response.json(classToClass(interviews));
  }

  public async listByInterviewer(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const listInterviews = container.resolve(
      ListInterviewsByInterviewerService,
    );

    const interview = await listInterviews.execute({ interviewer_id: id });

    return response.json(classToClass(interview));
  }

  public async getInterviewById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { interviewId } = request.params;
    const getInterview = container.resolve(ListInterviewsService);
    const interview = await getInterview.findOne(interviewId);
    return response.json(classToClass(interview));
  }

  public async handleOfflineInterviews(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const offlineInterviewData = request.body;

    const handleFindInterviews = container.resolve(
      HandleOfflineInterviewService,
    );

    const unsavedInterviews =
      handleFindInterviews.execute(offlineInterviewData);

    return response.status(201).json(unsavedInterviews);
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
