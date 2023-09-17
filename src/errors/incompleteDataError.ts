import { ApplicationError } from "@/protocols/movie.protocol";

export function incompleteDataError(message: string): ApplicationError {
    return {
      name: 'IncompleteDataError',
      message,
    };
  }