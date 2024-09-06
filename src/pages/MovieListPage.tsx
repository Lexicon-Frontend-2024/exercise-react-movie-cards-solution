import { ReactElement, useContext } from "react";
import { MovieCard } from "../components";
import { MovieContext } from "../context/MovieProvider";

export function MovieListPage(): ReactElement {
  const { movies } = useContext(MovieContext);

  return (
    <section className="movie-list">
      {movies.map((m) => (
        <MovieCard key={m.title} movie={m} />
      ))}
    </section>
  );
}
