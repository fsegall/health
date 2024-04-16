import { IndigenousInterviewV2 } from '../infra/typeorm/entities/IndigenousInterview';

export interface IListAndCountIndigenousInterviewsDTO {
  indigenous_interviews: IndigenousInterviewV2[];
  pagination: {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
  totalCount: number;
}
