import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";
import { AddMoviePage, MovieListPage } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route index element={<MovieListPage />} />
      <Route path="add-movie" element={<AddMoviePage />} />
    </Route>
  )
);
