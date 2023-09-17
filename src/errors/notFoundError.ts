import { ApplicationError } from "@/protocols/movie.protocol";

export function notFoundError(message: string): ApplicationError {
    return {
      name: 'NotFoundError',
      message,
    };
  }