import { Request, Response } from "express";
import httpStatus from "http-status";
import { Movie } from "@/protocols/movie.protocol";
import movieServices from "@/services/movie.services";

async function countByPlatform(req: Request, res: Response) {
    const counts = await movieServices.countMoviesByPlatform();
    res.status(httpStatus.OK).json(counts);
}

async function countByGenre(req: Request, res: Response) {
    const counts = await movieServices.countMoviesByGenre();
    res.status(httpStatus.OK).json(counts);
}

async function getByGenre(req: Request, res: Response) {
    const genre = req.params.genre;
    const movies = await movieServices.listMoviesByGenre(genre);
    res.status(httpStatus.OK).json(movies);
}

const filteringController = {
    countByPlatform,
    countByGenre,
    getByGenre,
  };
  
  export default filteringController;