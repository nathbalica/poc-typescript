import { ApplicationError } from "@/protocols/movie.protocol";

export function tooManyResultsError(message: string): ApplicationError {
    return {
      name: 'TooManyResultsError',
      message,
    };
  }