import { Router } from "express";
import movieController from "@/controllers/movie.controller";
import { movieSchema } from "@/schemas/movie.schema";
import { validateSchema } from "@/middlawares/validateSchema";

const movieRouter = Router()

movieRouter.post('/movie', validateSchema(movieSchema), movieController.create)
movieRouter.get('/movie', movieController.list)
movieRouter.put('/movie/:id', validateSchema(movieSchema), movieController.update)
movieRouter.delete('/movie/:id', movieController.remove)

export default movieRouter;