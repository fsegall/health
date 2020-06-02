// Estender a interface Express.Request para ter uma propriedade user
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
