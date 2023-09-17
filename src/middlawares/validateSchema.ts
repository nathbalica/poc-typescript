import { NextFunction, Request, Response } from 'express';
import Joi, { Schema } from 'joi';
import { validationError } from '@/errors/validationError';

export function validateSchema(schema: Schema) {
    return function (req: Request, res: Response, next: NextFunction) {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const errorMessage = error.details.map((detail) => detail.message).join(" ");
            const errorToThrow = validationError(errorMessage); // Atribuir a mensagem de erro ao criar o erro de validação
            next(errorToThrow);
        } else {
            next();
        }
    };
}
