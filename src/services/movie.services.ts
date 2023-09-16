import movieRepository from "@/repository/movie.repository";
import { Movie } from "@/protocols/movie.protocol";

const listMovies = async (): Promise<Movie[]> => {
  return await movieRepository.listMovies();
};

const addMovie = async (movie: Movie): Promise<Movie> => {
  return await movieRepository.addMovie(movie);
};

const updateMovie = async (id: number, movie: Movie): Promise<Movie | null> => {
  return await movieRepository.updateMovie(id, movie);
};

const deleteMovie = async (id: number): Promise<void> => {
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
const movieServices = {
  listMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  countMoviesByGenre,
  countMoviesByPlatform,
};


export default movieServices;