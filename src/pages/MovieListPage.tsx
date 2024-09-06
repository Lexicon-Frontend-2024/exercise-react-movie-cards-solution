import { ReactElement } from "react";
import { MovieCard } from "../components";
import { IMovieContext } from "../interfaces";
import { useOutletContext } from "react-router-dom";

export function MovieListPage(): ReactElement {
  const { movies } = useOutletContext<IMovieContext>();

  console.log(movies);

  return (
    <section className="movie-list">
      {movies.map((m) => (
        <MovieCard key={m.title} movie={m} />
      ))}
    </section>
  );
}
