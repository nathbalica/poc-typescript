import { Router } from "express";
import movieRouter from "./movie.router";
import filteringRouter from "./filtering.router";

const router = Router();
router.use(movieRouter);
router.use(filteringRouter);

export default router;
