import { ReactElement, useState } from "react";
import { Header } from ".";
import { moviesFromData } from "../data";
import { IMovie, IMovieContext } from "../interfaces";
import { Outlet } from "react-router-dom";

import "../css/App.css";

export function App(): ReactElement {




  return (
    <>
      <Header />
      <Outlet context={movieContext} />
    </>
  );
}
