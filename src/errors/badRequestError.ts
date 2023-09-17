import { ApplicationError } from "@/protocols/movie.protocol";

export function badRequestError(detail: string = ""): ApplicationError {
    return {
      name: 'BadRequestError',
      message: `Requisição inválida. ${detail}`.trim(),
    };
  }