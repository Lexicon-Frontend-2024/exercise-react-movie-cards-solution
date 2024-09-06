import { ReactElement } from "react";
import { MovieCard } from "../components";
import { IMovie } from "../interfaces";

export function MovieListPage(): ReactElement {
  return (
    <section className="movie-list">
      Movie List
      {/* {movies.map((m) => (
        <MovieCard key={m.title} removeMovie={removeMovie} movie={m} />
      ))} */}
    </section>
  );
}
