import { ReactElement } from "react";
import { MovieCard } from "../components";
import { IMovie } from "../interfaces";

interface IMovieListProps {
  movies: IMovie[];
  removeMovie: (movie: IMovie) => void;
}

export function MovieListPage({ movies, removeMovie }: IMovieListProps): ReactElement {
  return (
    <section className="movie-list">
      {movies.map((m) => (
        <MovieCard key={m.title} removeMovie={removeMovie} movie={m} />
      ))}
    </section>
  );
}
