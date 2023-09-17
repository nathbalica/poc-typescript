import { Router } from "express";
import filteringController from "@/controllers/filtering.controller";

const filteringRouter = Router();

filteringRouter.get(
  "/filtering/count/platform",
  filteringController.countByPlatform
);
filteringRouter.get("/filtering/count/genre", filteringController.countByGenre);
filteringRouter.get("/filtering/genre/:genre", filteringController.getByGenre); // rota de filtragem por gênero

export default filteringRouter;
