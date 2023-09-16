import { Router } from "express";
import movieController from "@/controllers/movie.controller";

const movieRouter = Router()

movieRouter.post('movie', movieController.create)

export default movieRouter;