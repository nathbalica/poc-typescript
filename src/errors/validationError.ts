import { ApplicationError } from "@/protocols/movie.protocol";

export function validationError(message: string): ApplicationError {
    return {
      name: 'ValidationError',
      message,
    };
  }