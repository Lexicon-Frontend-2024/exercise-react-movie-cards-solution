import { ReactElement, useState } from "react";
import { AddMovie } from ".";
import { moviesFromData } from "../data";
import { IMovie } from "../interfaces";
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

  return (
    <>
      <Outlet />
    </>
  );
}
