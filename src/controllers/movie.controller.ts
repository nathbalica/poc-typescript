import { Request, Response } from "express";
import httpStatus from "http-status";
import { Movie } from "@/protocols/movie.protocol";
import movieServices from "@/services/movie.services";

async function create(req: Request, res: Response) {
  const createMovie: Movie = req.body;

  if (!createMovie.name || !createMovie.platform || !createMovie.genre) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: "Nome, plataforma e gênero são campos obrigatórios." });
  }
  const newMovie = await movieServices.addMovie(createMovie);
  res.status(httpStatus.CREATED).json(newMovie);
}

async function list(req: Request, res: Response) {
  const movies = await movieServices.listMovies();
  res.status(httpStatus.OK).json(movies);
}

async function update(req: Request, res: Response) {


      const movieId = parseInt(req.params.id);
      const updateData: Movie = req.body;

      if (!updateData.name || !updateData.platform || !updateData.genre) {
        return res.status(httpStatus.BAD_REQUEST).json({ message: "Nome, plataforma e gênero são campos obrigatórios." });
      }
  
      const updatedMovie = await movieServices.updateMovie(movieId, updateData);
      res.status(httpStatus.OK).json(updatedMovie);
}

async function remove(req:Request, res: Response) {
    const movieId = parseInt(req.params.id);

    await movieServices.deleteMovie(movieId);
    res.status(httpStatus.NO_CONTENT).send();
    
}

const movieController = {
  create,
  list,
  update,
  remove
};

export default movieController;
