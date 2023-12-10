import { IndigenousInterview } from '../infra/typeorm/entities/IndigenousInterview';

export interface IListAndCountIndigenousInterviewsDTO {
  indigenous_interviews: IndigenousInterview[];
  pagination: {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
  totalCount: number;
}
