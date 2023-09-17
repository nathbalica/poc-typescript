import { ApplicationError } from "@/protocols/movie.protocol";

export function conflictError(message: string): ApplicationError {
  return {
    name: 'ConflictError',
    message,
  };
}


