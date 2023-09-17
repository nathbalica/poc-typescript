import { connection } from "@/database/db";
import { Movie, MovieRepository } from "@/protocols/movie.protocol";

const movieRepository: MovieRepository = {
  listMovies: async () => {
    const result = await connection.query("SELECT * FROM movies;");
    return result.rows as Movie[];
  },
  addMovie: async (movie: Movie) => {
    const { name, platform, genre, status, rating, summary } = movie;
    const result = await connection.query(
      "INSERT INTO movies (name, platform, genre, status, rating, summary) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, platform, genre, status, rating, summary]
    );

    return result.rows[0] as Movie;
  },
  updateMovie: async (id: number, movie: Movie) => {
    const { name, platform, genre, status, rating, summary } = movie;
    const result = await connection.query(
      "UPDATE movies SET name=$1, platform=$2, genre=$3, status=$4, rating=$5, summary=$6 WHERE id=$7 RETURNING *",
      [name, platform, genre, status, rating, summary, id]
    );

    return result.rows[0] || null;
  },

  deleteMovie: async (id: number) => {
    await connection.query("DELETE FROM movies WHERE id=$1", [id]);
  },
  countMoviesByPlatform: async () => {
    const result = await connection.query(
      "SELECT platform, COUNT(*) as count FROM movies GROUP BY platform"
    );
    return result.rows;
  },
  countMoviesByGenre: async () => {
    const result = await connection.query(
      "SELECT genre, COUNT(*) as count FROM movies GROUP BY genre"
    );
    return result.rows;
  },
  findMovieByName: async (name: string) => {
    const result = await connection.query("SELECT * FROM movies WHERE name=$1", [name]);
    return result.rows[0] || null;
  },
  findMovieById: async (id: number) => {
    const result = await connection.query("SELECT * FROM movies WHERE id=$1", [id]);
    return result.rows[0] || null;
  },
  listMoviesByGenre: async (genre: string) => {
    const result = await connection.query("SELECT * FROM movies WHERE genre=$1", [genre]);
    return result.rows as Movie[];
  },
};

export default movieRepository;
