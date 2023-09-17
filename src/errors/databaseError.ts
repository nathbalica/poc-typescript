import { ApplicationError } from "@/protocols/movie.protocol";

export function databaseError(message: string): ApplicationError {
    return {
      name: 'DatabaseError',
      message,
    };
  }