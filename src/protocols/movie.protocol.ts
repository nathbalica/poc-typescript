export type Movie = {
    id?: number;
    name: string;
    platform: string;
    genre: string;
    status: string;
    rating?: number;
    summary?: string;
}

export type MovieRepository = {
    listMovies: () => Promise<Movie[]>;
    addMovie: (movie: Movie) => Promise<Movie>;
    updateMovie: (id: number, movie: Movie) => Promise<Movie | null>;
    deleteMovie: (id: number) => Promise<void>;
    countMoviesByPlatform: () => Promise<{ platform: string, count: number }[]>;
    countMoviesByGenre: () => Promise<{ genre: string, count: number }[]>;
    findMovieByName: (name: string) => Promise<Movie | null>;
    findMovieById: (id: number) => Promise<Movie | null>
}


export type ApplicationError = {
    name: string;
    message: string;
  };
