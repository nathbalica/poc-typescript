import { ApplicationError } from "@/protocols/movie.protocol";

export function resourceNotFoundError(resource: string = "Item"): ApplicationError {
    return {
      name: 'ResourceNotFoundError',
      message: `${resource} não encontrado.`,
    };
  }