export class PaginationStrategy {
  public page: number;
  public limit: number;
  public skip: number;

  constructor({ page, limit }: { page: number; limit: number }) {
    this.page = page;
    this.limit = limit;
    this.skip = (this.page - 1) * this.limit;
  }

  public handlePagination(
    total: number,
  ): {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  } {
    const currentStart = this.skip;
    const currentLimit = currentStart + this.limit;

    const hasNextPage = total > currentLimit;
    const hasPreviousPage = this.skip > 0;

    return {
      hasNextPage,
      hasPreviousPage,
    };
  }
}
