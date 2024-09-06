import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route element={<App />} path="/"></Route>)
);
