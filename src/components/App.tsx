import { ReactElement, useState } from "react";
import { AddMovie } from ".";
import { moviesFromData } from "../data";
import { IMovie, IMovieContext } from "../interfaces";
import { MovieListPage } from "../pages";

import "../css/App.css";
import { Outlet } from "react-router-dom";

export function App(): ReactElement {
  const [movies, setMovies] = useState<IMovie[]>(moviesFromData);

  const addMovie = (movie: IMovie) => {
    setMovies([movie, ...movies]);
  };

  const removeMovie = (movie: IMovie): void => {
    setMovies(movies.filter((m) => m !== movie));
  };

  const movieContext: IMovieContext = {
    movies,
  };

  return (
    <>
      <Outlet context={movieContext} />
    </>
  );
}
