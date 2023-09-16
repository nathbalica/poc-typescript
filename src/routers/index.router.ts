
import { Router } from "express";
import movieRouter from "./movie.router";

const router = Router()
router.use(movieRouter)

export default router;