import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ApplicationError } from '@/protocols/movie.protocol';

export default function errorHandler(
  err: ApplicationError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  let statusCode: number = httpStatus.INTERNAL_SERVER_ERROR;
  let errorName = 'InternalServerError';

  switch (err.name) {
    case 'ConflictError':
      statusCode = httpStatus.CONFLICT;
      errorName = err.name;
      break;
    case 'ValidationError':
    case 'QueryError':
      statusCode = httpStatus.UNPROCESSABLE_ENTITY;
      errorName = err.name;
      break;
    case 'NotFoundError':
      statusCode = httpStatus.NOT_FOUND;
      errorName = err.name;
      break;
    case 'BadRequestError':
    case 'IncompleteDataError':
      statusCode = httpStatus.BAD_REQUEST;
      errorName = err.name;
      break;
    case 'DatabaseError':
    case 'TooManyResultsError':
      statusCode = httpStatus.INTERNAL_SERVER_ERROR;
      errorName = err.name;
      break;
    default:
      // você pode manter esta parte vazia ou adicionar qualquer comportamento padrão aqui.
      break;
  }

  console.error(err.name);
  res.status(statusCode).send({
    error: errorName,
    message: err.message,
  });
}
