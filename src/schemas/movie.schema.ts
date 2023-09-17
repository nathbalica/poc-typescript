import Joi from "joi";
import { Movie } from "@/protocols/movie.protocol";
import { platforms, genres, status } from "@/constants/movie.constants";


export const movieSchema = Joi.object<Movie>({
    name: Joi.string().min(1).max(255).required(),
    platform: Joi.string().valid(...platforms).required(),
    genre: Joi.string().valid(...genres).required(),
    status: Joi.string().valid(...status).required(),
    rating: Joi.number().min(1).max(10).optional(),
    summary: Joi.string().min(1).max(1000).optional()
});
