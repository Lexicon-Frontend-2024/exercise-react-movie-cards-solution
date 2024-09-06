import { ReactElement } from "react";
import { Header } from ".";
import { Outlet } from "react-router-dom";
import { MovieProvider } from "../context";

import "../css/App.css";

export function App(): ReactElement {
  return (
    <>
      <Header />
      <MovieProvider>
        <Outlet />
      </MovieProvider>
    </>
  );
}
