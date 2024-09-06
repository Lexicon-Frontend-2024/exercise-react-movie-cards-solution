import { ReactElement, useState } from "react";
import { Header } from ".";
import { moviesFromData } from "../data";
import { IMovie, IMovieContext } from "../interfaces";
import { Outlet } from "react-router-dom";

import "../css/App.css";

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
    removeMovie,
  };

  return (
    <>
      <Header />
      <Outlet context={movieContext} />
    </>
  );
}
