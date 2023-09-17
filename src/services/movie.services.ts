import movieRepository from "@/repository/movie.repository";
import { Movie } from "@/protocols/movie.protocol";
import { conflictError } from "@/errors/conflictError";
import { notFoundError } from "@/errors/notFoundError";
import { platforms, genres, status } from "@/constants/movie.constants";
import { validationError } from "@/errors/validationError";


const validateMovie = (movie: Movie): void => {
  if (!movie.name || !movie.platform || !movie.genre) {
    throw validationError("Nome, plataforma e gênero são campos obrigatórios.");
  }

  if (!platforms.includes(movie.platform)) {
    throw validationError(`Plataforma inválida. Opções válidas são: ${platforms.join(', ')}.`);
  }

  if (!genres.includes(movie.genre)) {
    throw validationError(`Gênero inválido. Opções válidas são: ${genres.join(', ')}.`);
  }

  if (movie.status && !status.includes(movie.status)) {
    throw validationError(`Status inválido. Opções válidas são: ${status.join(', ')}.`);
  }
};

const listMovies = async (): Promise<Movie[]> => {
  return await movieRepository.listMovies();
};

const addMovie = async (movie: Movie): Promise<Movie> => {
  validateMovie(movie); // Validar o filme antes de qualquer operação.
  const existingMovie = await movieRepository.findMovieByName(movie.name)
  if(existingMovie){
    throw conflictError('Filme já existe!')
  }
  return await movieRepository.addMovie(movie);
};

const updateMovie = async (id: number, movie: Movie): Promise<Movie | null> => {
  validateMovie(movie); // Validar o filme antes de qualquer operação.
  const existingMovie = await movieRepository.findMovieById(id);
  if (!existingMovie) {
    throw notFoundError('Filme não encontrado.');
  }

  // Verificar se o nome do filme já existe e não é o mesmo sendo atualizado.
  const anotherMovieWithSameName = await movieRepository.findMovieByName(movie.name);
  if (anotherMovieWithSameName && anotherMovieWithSameName.id !== id) {
    throw conflictError('Outro filme com o mesmo nome já existe!');
  }
  
  return await movieRepository.updateMovie(id, movie);
};

const deleteMovie = async (id: number): Promise<void> => {
  const existingMovie = await movieRepository.findMovieById(id);
  if (!existingMovie) {
    throw notFoundError('Filme não encontrado.');
  }
  
  await movieRepository.deleteMovie(id);
};


const countMoviesByPlatform = async (): Promise<
  { platform: string; count: number }[]
> => {
  return await movieRepository.countMoviesByPlatform();
};

const countMoviesByGenre = async (): Promise<
  { genre: string; count: number }[]
> => {
  return await movieRepository.countMoviesByGenre();
};

const listMoviesByGenre = async (genre: string): Promise<Movie[]> => {
  return await movieRepository.listMoviesByGenre(genre);
};


const movieServices = {
  listMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  countMoviesByGenre,
  countMoviesByPlatform,
  listMoviesByGenre
};


export default movieServices;