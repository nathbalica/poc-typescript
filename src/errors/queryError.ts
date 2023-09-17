import { ApplicationError } from "@/protocols/movie.protocol";

export function queryError(message: string): ApplicationError {
    return {
      name: 'QueryError',
      message,
    };
  }